import { createFileRoute } from '@tanstack/react-router'
import { Box } from '../components/ui/Box/Box'

export const Route = createFileRoute('/interExternal')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Box color='secondary'>Hello</Box>
}
