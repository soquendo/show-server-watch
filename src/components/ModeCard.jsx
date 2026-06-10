import { getStatusClass, getRiskStars } from "../utils/statusUtils"

function ModeCard({ mode }) {
  const statusClass = getStatusClass(mode.status)

  return (
    <article className={`service-card ${statusClass}`}>
      <div className="service-accent"></div>

      <div className="service-content">
        <div className="service-card-header">
          <h3>{mode.name}</h3>
          <span className={`status-pill ${statusClass}`}>
            {mode.status}
          </span>
        </div>

        <div className="risk-block">
          <span>Player Risk</span>
          <strong>{getRiskStars(mode.impact)}</strong>
        </div>

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
      </div>
    </article>
  )
}

export default ModeCard