const FALLBACK_WORKSPACE_ORIGIN = 'https://workspace.example.com'

export function workspaceOrigin() {
  const configured = import.meta.env.VITE_WORKSPACE_ORIGIN
  if (typeof configured === 'string' && configured.trim() !== '') {
    return configured.trim().replace(/\/$/, '')
  }
  return FALLBACK_WORKSPACE_ORIGIN
}
