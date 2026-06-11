function LiveSignals({ evidence }) {
  return (
    <section className="dashboard-panel">
      <div className="section-title">
        <h2>Evidence</h2>
        <p>Signals currently shaping the status estimate.</p>
      </div>

      <div className="signal-grid">
        {evidence.map((signal) => (
          <article
            className={`signal-card ${signal.level}`}
            key={signal.name}
          >
            <h3>{signal.name}</h3>
            <p>{signal.status}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LiveSignals