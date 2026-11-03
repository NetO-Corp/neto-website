const plans = [
  {
    name: 'Explore',
    price: 'Placeholder',
    detail: 'Browse public discovery and pricing. No account on this site.',
  },
  {
    name: 'Build',
    price: 'Placeholder',
    detail: 'A first workload path. Figures are not published in this seed.',
  },
  {
    name: 'Scale',
    price: 'Placeholder',
    detail: 'Larger capacity. Talk to NetO later. This page does not take payment.',
  },
]

export default function Pricing() {
  return (
    <div className="page">
      <section className="hero">
        <p className="eyebrow">Public pricing</p>
        <h1>Pricing</h1>
        <p className="lede">
          These plans are placeholders for the marketing shell. They are not a quote, and this
          page does not take payment, check out, or sign you in.
        </p>
      </section>
      <ul className="card-grid">
        {plans.map((plan) => (
          <li key={plan.name}>
            <article className="card">
              <p className="card-kicker">Placeholder</p>
              <h2>{plan.name}</h2>
              <p className="price">{plan.price}</p>
              <p>{plan.detail}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
