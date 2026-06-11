function EventLog({ events }) {
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