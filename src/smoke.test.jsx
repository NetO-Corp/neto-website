import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App'

function renderAt(path) {
  return render(
    <MemoryRouter
      initialEntries={[path]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>,
  )
}

test('home renders the public discovery shell', () => {
  renderAt('/')

  expect(
    screen.getByRole('heading', { level: 1, name: /what do you want to do/i }),
  ).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /run a workload/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /check public pricing/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /pick a starting region/i })).toBeInTheDocument()

  const handoff = screen.getAllByRole('link', { name: /continue in workspace/i })
  expect(handoff.length).toBeGreaterThan(0)
  for (const link of handoff) {
    expect(link).toHaveAttribute('href', 'https://workspace.example.test')
  }

  expect(screen.getByRole('link', { name: /view pricing/i })).toHaveAttribute('href', '/pricing')
})

test('pricing route renders a public placeholder', () => {
  renderAt('/pricing')
  expect(screen.getByRole('heading', { level: 1, name: /^pricing$/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /explore/i })).toBeInTheDocument()
  expect(screen.getAllByText(/placeholder/i).length).toBeGreaterThan(0)
})
