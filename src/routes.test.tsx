import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import routes from './routes'

describe('<RouterProvider router={router} />', () => {
  it('/', async () => {
    const router = route('/')
    render(<RouterProvider router={router} />)

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('Bordspelhulpje')
    })
  })

  it('/terraforming-mars', async () => {
    const router = route('/terraforming-mars')
    render(<RouterProvider router={router} />)

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('Terraforming Mars')
    })
  })
})

function route(url: string) {
  return createMemoryRouter(routes, {
    initialEntries: [url],
  })
}
