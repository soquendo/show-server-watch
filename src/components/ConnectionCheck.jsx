function ConnectionCheck() {
  return (
    <section className="dashboard-panel connection-check">
      <div>
        <p className="eyebrow-small">Connection Check</p>
        <h2>Seeing “User Offline” or connection errors?</h2>
        <p>
          Current community signals suggest this may be related to broader server instability,
          not necessarily your console, router, or account.
        </p>
      </div>

      <div className="check-list">
        <div>
          <span>Overall Signal</span>
          <strong>Elevated Reports</strong>
        </div>

        <div>
          <span>Most Affected</span>
          <strong>Ranked, Battle Royale</strong>
        </div>

        <div>
          <span>Last Signal</span>
          <strong>2m ago</strong>
        </div>
      </div>
    </section>
  )
}

export default ConnectionCheck