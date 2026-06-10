const events = [
  {
    time: "3:48 AM",
    status: "warning",
    title: "Community reports increasing",
    detail: "Players reporting login and online connection issues.",
  },
  {
    time: "3:45 AM",
    status: "danger",
    title: "Ranked and Battle Royale affected",
    detail: "Elevated reports tied to competitive online modes.",
  },
  {
    time: "3:42 AM",
    status: "good",
    title: "Marketplace responding normally",
    detail: "No major marketplace issue detected from current signals.",
  },
  {
    time: "3:39 AM",
    status: "neutral",
    title: "No official SDS update detected",
    detail: "Official channels have not posted a new server notice.",
  },
]

function EventLog() {
  return (
    <section className="dashboard-panel">
      <div className="section-title">
        <h2>Event Log</h2>
        <p>Recent signal changes and detected activity.</p>
      </div>

      <div className="event-log">
        {events.map((event) => (
          <div className={`event-item ${event.status}`} key={`${event.time}-${event.title}`}>
            <span className="event-dot"></span>

            <div className="event-time">{event.time}</div>

            <div>
              <h3>{event.title}</h3>
              <p>{event.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventLog