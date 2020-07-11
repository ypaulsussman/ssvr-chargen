import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import App  from './App'

describe('basic app routing', () => {
  test('renders chargen page on root url', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    )
  
    expect(screen.getByText("Vilhon Reach PC Generator")).toBeInTheDocument();
  })
  
  test('renders demo page on demo url', () => {
    const history = createMemoryHistory()
    history.push('/demo')
    render(
      <Router history={history}>
        <App />
      </Router>
    )
  
    expect(screen.getByText("Learn React")).toBeInTheDocument();
  })
})
