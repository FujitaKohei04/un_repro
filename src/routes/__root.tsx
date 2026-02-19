// src/routes/__root.tsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="p-4 bg-gray-100 flex gap-4 sticky top-0">
        <Link to="/" className="[&.active]:font-bold text-gray-700">Home</Link>
        <Link to="/about" className="[&.active]:font-bold text-gray-700">About</Link>
      </nav>
      <hr />
      {/* Outlet が「各ページの内容」に置き換わります */}
      <main className="container mx-auto">
        <Outlet />
      </main>
      {/* 開発時のみ表示されるデバッグツール */}
      <TanStackRouterDevtools />
    </>
  ),
})