import { Link, Outlet } from 'react-router-dom'
import { Group, Container } from '@mantine/core'

export default function Layout() {
  return (
    <Container size="xs" mb={250}>
      <Group>
        <Link to="/7-2">课程 7.2</Link>
        <Link to="/7-3">课程 7.3</Link>
      </Group>
      <Outlet />
    </Container>
  )
}
