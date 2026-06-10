function ModeCard({ mode }) {
  return (
    <article>

      <h3>{mode.name}</h3>

      <p>
        Status: {mode.status}
      </p>

      <p>
        Player Impact: {mode.impact}
      </p>

    </article>
  )
}

export default ModeCard