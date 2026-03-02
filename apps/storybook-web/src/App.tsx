function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Swiss Activities Design System
      </h1>
      <p className="mt-3 text-slate-600">
        UI components are documented in Storybook.
      </p>
      <div className="mt-8">
        <a
          className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          href="http://localhost:6006"
        >
          Open Storybook
        </a>
      </div>
      <p className="mt-3 text-sm text-slate-500">
        Run <code>bun run storybook:web</code> to start it.
      </p>
    </main>
  )
}

export default App
