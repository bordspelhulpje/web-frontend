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

  it('/monopolie', async () => {
    const router = route('/monopolie')
    render(<RouterProvider router={router} />)

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('Monopolie')
    })
  })
})

function route(url: string) {
  return createMemoryRouter(routes, {
    initialEntries: [url],
  })
}
