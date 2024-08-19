import { createHashRouter, RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import Layout from './Layout'
import Lesson72 from './Lesson72'
import Lesson73 from './Lesson73'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '7-2',
        element: <Lesson72 />,
      },
      {
        path: '7-3',
        element: <Lesson73 />,
      },
    ],
  },
])

export default function App() {
  return (
    <MantineProvider>
      <Notifications position="top-center" />
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
