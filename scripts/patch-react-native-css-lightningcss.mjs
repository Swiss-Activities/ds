import { existsSync } from 'node:fs'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const bunStoreDir = path.join(process.cwd(), 'node_modules', '.bun')

const replacementBlock = `  // Prefer resolving relative to react-native-css first to avoid pulling
  // incompatible lightningcss versions from other toolchains in a workspace.
  try {
    lightningcssPath ??= require.resolve("lightningcss");
  } catch {
    // Intentionally left empty
  }

  // Fallback: resolve from @expo/metro-config when needed.
  try {
    lightningcssPath ??= require.resolve("lightningcss", {
      paths: [require.resolve("@expo/metro-config/package.json").replace("/package.json", "")]
    });
  } catch {
    // Intentionally left empty
  }

`

async function patchLoaderFile(loaderFile) {
  const source = await readFile(loaderFile, 'utf8')
  const startMarker =
    '  // Try to resolve the path to lightningcss from the @expo/metro-config package'
  const endMarker = '  if (!lightningcssPath) {'
  const startIndex = source.indexOf(startMarker)
  const endIndex = source.indexOf(endMarker)

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    return false
  }

  const patched =
    source.slice(0, startIndex) + replacementBlock + source.slice(endIndex)

  if (patched === source) {
    return false
  }

  await writeFile(loaderFile, patched, 'utf8')
  return true
}

async function run() {
  if (!existsSync(bunStoreDir)) {
    return
  }

  const entries = await readdir(bunStoreDir)
  let patchedCount = 0

  for (const entry of entries) {
    if (!entry.startsWith('react-native-css@')) {
      continue
    }

    const loaderFile = path.join(
      bunStoreDir,
      entry,
      'node_modules',
      'react-native-css',
      'dist',
      'commonjs',
      'compiler',
      'lightningcss-loader.js',
    )

    if (!existsSync(loaderFile)) {
      continue
    }

    if (await patchLoaderFile(loaderFile)) {
      patchedCount += 1
      console.log(`patched ${path.relative(process.cwd(), loaderFile)}`)
    }
  }

  if (patchedCount === 0) {
    console.log('react-native-css lightningcss loader already patched')
  }
}

await run()
