import { createFileRoute } from '@tanstack/react-router'

// createFileRoute の引数には、ファイル名に対応するパスを書きます
export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold">About Us</h2>
      <p>これは TanStack Router で作成した 2 つ目のページです。</p>
    </div>
  )
}