const signals = [
  {
    name: "Official SDS Channels",
    status: "No recent updates",
    level: "neutral",
  },
  {
    name: "Community Reports",
    status: "Strong signal",
    level: "danger",
  },
  {
    name: "Marketplace",
    status: "Operational",
    level: "good",
  },
  {
    name: "Companion App",
    status: "Issues reported",
    level: "warning",
  },
]

function LiveSignals() {
  return (
    <section className="dashboard-panel">
      <div className="section-title">
        <h2>Evidence</h2>
        <p>Signals currently shaping the status estimate.</p>
      </div>

      <div className="signal-grid">
        {signals.map((signal) => (
          <article className={`signal-card ${signal.level}`} key={signal.name}>
            <h3>{signal.name}</h3>
            <p>{signal.status}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LiveSignals