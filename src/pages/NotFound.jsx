import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page">
      <section className="hero">
        <p className="eyebrow">Public site</p>
        <h1>Page not found</h1>
        <p className="lede">This marketing site only publishes Home and Pricing.</p>
        <Link className="button" to="/">
          Back to Home
        </Link>
      </section>
    </div>
  )
}
