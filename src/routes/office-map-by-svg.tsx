import { createFileRoute } from '@tanstack/react-router'
import { OfficeMap } from '../components/OfficeMap/OfficeMap';

export const Route = createFileRoute('/office-map-by-svg')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
      <OfficeMap />
    );
}
