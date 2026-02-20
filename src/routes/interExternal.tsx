import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/interExternal')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/interExternal"!</div>
}
