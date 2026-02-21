// src/routes/__root.tsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useOfficeStore } from '../store/officeStore'

export const Route = createRootRoute({
  component: () => {
    const { isEditMode, toggleEditMode } = useOfficeStore();

    const editButtonClass = isEditMode
      ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      : 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded';

    return (
      <div className='w-[100dvw] h-[100dvw] overflow-x-hidden'>
        <header className="p-4 bg-gray-100 flex justify-between items-center gap-4 sticky top-0 ">
          <div className="flex gap-4 items-center">
            <Link to="/" className="[&.active]:font-bold text-gray-700">Home</Link>
            <Link to="/about" className="[&.active]:font-bold text-gray-700">About</Link>
            <Link to="/interExternal" className="[&.active]:font-bold text-gray-700">inEx</Link>
            <Link to="/office-map" className="[&.active]:font-bold text-gray-700">座席表</Link>
          </div>
          <button onClick={toggleEditMode} className={editButtonClass}>
            {isEditMode ? '完了' : '編集モード'}
          </button>
        </header>
        <hr />
        {/* Outlet が「各ページの内容」に置き換わります */}
        <main className="container m-auto">
          <Outlet />
        </main>
        {/* 開発時のみ表示されるデバッグツール */}
        <TanStackRouterDevtools />
      </div>
    )
  },
})