import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { App } from './App'

describe('<App/>', () => {
  it('renders', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })
})