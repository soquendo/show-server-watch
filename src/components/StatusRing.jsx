import { getStatusClass } from "../utils/statusUtils"

function StatusRing({ status }) {
  const statusClass = getStatusClass(status.status)

  return (
    <div className={`status-ring ${statusClass}`}>
      <div className="ring-inner">
        <span className="status-icon">!</span>
        <h2>{status.status}</h2>
        <p>Overall Status</p>
      </div>
    </div>
  )
}

export default StatusRing