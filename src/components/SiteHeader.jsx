import { NavLink } from 'react-router-dom'
import { workspaceOrigin } from '../config/workspaceOrigin'

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="wordmark" end>
          NetO
        </NavLink>
        <nav className="nav" aria-label="Primary">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
        </nav>
        <a className="header-cta" href={workspaceOrigin()}>
          Continue in Workspace
        </a>
      </div>
    </header>
  )
}
