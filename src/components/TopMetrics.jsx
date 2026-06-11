function TopMetrics({ metrics }) {
  const officialStatus = metrics.officialIncident
    ? "Incident reported"
    : "No official statement"

  return (
    <section className="top-metrics">
      <div className="metric">
        <span className="metric-label">Last Updated</span>
        <strong>{metrics.lastUpdated}</strong>
      </div>

      <div className="metric">
        <span className="metric-label">Affected Services</span>
        <strong>{metrics.affectedServices}</strong>
      </div>

      <div className="metric">
        <span className="metric-label">Official Status</span>
        <strong>{officialStatus}</strong>
      </div>

      <div className="metric">
        <span className="metric-label">Total Reports</span>
        <strong>{metrics.totalReports}</strong>
      </div>
    </section>
  )
}

export default TopMetrics