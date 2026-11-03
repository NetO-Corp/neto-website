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
  expect(screen.getAllByText(/access is issued by neto, not self-serve signup/i).length).toBeGreaterThan(0)
  expect(screen.queryByRole('link', { name: /sign up|create account|get started/i })).not.toBeInTheDocument()
  expect(screen.queryByRole('button', { name: /sign up|create account|checkout|buy now/i })).not.toBeInTheDocument()
})

test('pricing route renders a public placeholder', () => {
  renderAt('/pricing')
  expect(screen.getByRole('heading', { level: 1, name: /^pricing$/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /explore/i })).toBeInTheDocument()
  expect(screen.getAllByText(/does not take payment/i).length).toBeGreaterThan(0)
  expect(screen.getAllByText(/placeholder/i).length).toBeGreaterThan(0)
  expect(screen.queryByRole('button', { name: /pay|checkout|subscribe|buy now/i })).not.toBeInTheDocument()
})
