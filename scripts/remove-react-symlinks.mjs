import { existsSync, lstatSync, rmSync } from "node:fs";
import path from "node:path";

// When the ds is consumed as source via tsconfig path aliases (e.g. by a
// host Next.js app), webpack walks node_modules upward from the ds source
// files when resolving imports like `react`. If bun has created peer-dep
// symlinks at `packages/ui/node_modules/react`, webpack picks those up
// instead of the host app's React, causing dual-React hydration errors.
//
// This script removes those peer-dep symlinks after install. The storybook
// apps still resolve React via their own node_modules (where it's a real
// dependency, not a peer dep), so they continue to work.

const targets = [
  "packages/ui/node_modules/react",
  "packages/ui/node_modules/react-dom",
  "packages/ui/node_modules/react-native",
  "packages/ui/node_modules/react-native-svg",
];

let removed = 0;

for (const target of targets) {
  const fullPath = path.join(process.cwd(), target);
  if (!existsSync(fullPath)) continue;

  const stat = lstatSync(fullPath);
  if (!stat.isSymbolicLink()) continue;

  rmSync(fullPath);
  console.log(`removed peer-dep symlink: ${target}`);
  removed += 1;
}

if (removed === 0) {
  console.log("no react peer-dep symlinks to remove");
}
