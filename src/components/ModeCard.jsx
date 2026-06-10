function getStatusClass(status) {
  return status.toLowerCase().replaceAll(" ", "-")
}

function getStars(impact) {
  if (impact === "High") return "★★★★★"
  if (impact === "Medium") return "★★★☆☆"
  return "★☆☆☆☆"
}

function ModeCard({ mode }) {
  return (
    <article className={`service-card ${getStatusClass(mode.status)}`}>
      <div className="service-card-header">
        <h3>{mode.name}</h3>
        <span className={`status-pill ${getStatusClass(mode.status)}`}>
          {mode.status}
        </span>
      </div>

      <p className="card-label">Player Risk</p>
      <p className="risk-stars">{getStars(mode.impact)}</p>

      <div className="card-footer">
        <div>
          <span>Impact</span>
          <strong>{mode.impact}</strong>
        </div>
        <div>
          <span>Last Signal</span>
          <strong>2m ago</strong>
        </div>
      </div>
    </article>
  )
}

export default ModeCard