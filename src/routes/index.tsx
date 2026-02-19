import { createFileRoute } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router";
import { Button } from '../components/ui/Button/Button';


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3 className="text-3xl font-bold text-blue-600">Welcome Home!</h3>
      {/* to about追加することで、TanStackが自動でルートを追加してくれる */}
      <Link to="/about" >About Page</Link>
      <Button color='primary' size='medium' onClick={() => alert('clicked!')}>Alart</Button>
      <div className='text-5xl'>df;klalf;</div>
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


