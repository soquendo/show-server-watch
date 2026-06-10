function StatusCard({ overallStatus }) {
  return (
    <section>

      <h2>{overallStatus.status}</h2>

      <p>
        Confidence: {overallStatus.confidence}
      </p>

      <p>
        Last Updated: {overallStatus.updated}
      </p>

      <p>
        {overallStatus.summary}
      </p>

    </section>
  )
}

export default StatusCard