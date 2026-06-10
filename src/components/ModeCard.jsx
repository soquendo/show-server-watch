import { getStatusClass, getRiskStars } from "../utils/statusUtils"

function ModeCard({ mode }) {
  const statusClass = getStatusClass(mode.status)

  return (
    <article className={`service-card ${statusClass}`}>
      <div className="service-accent"></div>

      <div className="service-content">
        <div className="service-card-header">
          <h3>{mode.displayName}</h3>
          <span className={`status-pill ${statusClass}`}>
            {mode.status}
          </span>
        </div>

        <div className="risk-block">
          <span>Player Risk</span>
          <strong>{getRiskStars(mode.playerRisk)}</strong>
        </div>

        <div className="card-footer">
          <div>
            <span>Reports</span>
            <strong>{mode.reports}</strong>
          </div>

          <div>
            <span>Confidence</span>
            <strong>{mode.confidence}%</strong>
          </div>

          <div>
            <span>Last Signal</span>
            <strong>{mode.lastSignalMinutes}m ago</strong>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ModeCard