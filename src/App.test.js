import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import App  from './App'

describe('basic app routing', () => {
  test('renders chargen page on root url', () => {
    const history = createMemoryHistory()
    history.push('/chargen')
    render(
      <Router history={history}>
        <App />
      </Router>
    )
  
    expect(screen.getByText("Vilhon Reach PC Generator")).toBeInTheDocument();
  })
  
  test('renders lander on home url', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    )
  
    expect(screen.getByText("sup")).toBeInTheDocument();
  })
})
