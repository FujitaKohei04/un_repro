import { createFileRoute } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router";


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3 className="text-3xl font-bold text-blue-600">Welcome Home!</h3>
      {/* to about追加することで、TanStackが自動でルートを追加してくれる */}
      <Link to="/about" >About Page</Link>
      <div className='text-5xl'>fjadklf;</div>
      <div className='text-5xl'>fjadklf;</div>
      <div className='text-5xl'>fjadklf;</div>
      <div className='text-5xl'>fjadklf;</div>
      <div className='text-5xl'>fjadklf;</div>
      <div className='text-5xl'>fjadklf;</div>
      <div className='text-5xl'>fjadklf;</div>
      <div className='text-5xl'>fjadklf;</div>
      <div className='text-5xl'>fjadklf;</div>
      <div className='text-5xl'>fjadklf;</div>
      <div className='text-5xl'>fjadklf;</div>
      
    </div>
  )
}


