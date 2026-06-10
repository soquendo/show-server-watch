function TopMetrics({ status }) {
  return (
    <section className="top-metrics">
      <div className="metric">
        <span className="metric-label">Last Updated</span>
        <strong>{status.updated}</strong>
      </div>

      <div className="metric">
        <span className="metric-label">Confidence</span>
        <strong>{status.confidence}</strong>
      </div>

      <div className="metric">
        <span className="metric-label">Official Status</span>
        <strong>No official statement</strong>
      </div>

      <div className="metric">
        <span className="metric-label">Community Reports</span>
        <strong>Strong signal</strong>
      </div>
    </section>
  )
}

export default TopMetrics