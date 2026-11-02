import { Link } from 'react-router-dom'
import { workspaceOrigin } from '../config/workspaceOrigin'

const goals = [
  {
    id: 'run',
    title: 'Run a workload',
    text: 'Placeholder. Discovery starts from the job you want done, then suggests a path later.',
  },
  {
    id: 'pricing',
    title: 'Check public pricing',
    text: 'Placeholder. See how plans are presented on this site before any Workspace handoff.',
    to: '/pricing',
    action: 'View pricing',
  },
  {
    id: 'region',
    title: 'Pick a starting region',
    text: 'Placeholder. Region choice stays informational here. This page does not provision anything.',
  },
]

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <p className="eyebrow">Public discovery</p>
        <h1>What do you want to do?</h1>
        <p className="lede">
          Start from a goal. Home and Pricing stay on this public site. The Workspace is a
          separate product, and this website does not sign you in.
        </p>
      </section>

      <section className="goals" aria-labelledby="goals-heading">
        <h2 id="goals-heading">Goal-first discovery</h2>
        <ul className="card-grid">
          {goals.map((goal) => (
            <li key={goal.id}>
              <article className="card">
                <p className="card-kicker">Goal</p>
                <h3>{goal.title}</h3>
                <p>{goal.text}</p>
                {goal.to ? (
                  <Link className="text-link" to={goal.to}>
                    {goal.action}
                  </Link>
                ) : (
                  <p className="placeholder-tag">Placeholder</p>
                )}
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="handoff">
        <h2>When you are ready for the product</h2>
        <p>
          Continue in the Workspace on its own origin. This site only links there. It does not
          share a login store with the Workspace product.
        </p>
        <a className="button" href={workspaceOrigin()}>
          Continue in Workspace
        </a>
      </section>
    </div>
  )
}
