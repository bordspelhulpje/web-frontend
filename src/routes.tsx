import React, { FunctionComponent, useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'

const Home = React.lazy(() => import('./pages/Home'))
const TerraformingMars = React.lazy(() => import('./pages/TerraformingMars'))

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'terraforming-mars',
        element: <TerraformingMars />,
      },
    ],
  },
]

export default routes

export const Router: FunctionComponent = () => {
  const router = useMemo(() => createBrowserRouter(routes), [routes])
  return <RouterProvider router={router} />
}
