export function calculateOverallStatus(services) {
  const statuses = services.map((s) => s.status)

  if (statuses.includes("Major Outage")) {
    return "Major Outage"
  }

  const degradedCount = statuses.filter(
    (s) => s === "Degraded"
  ).length

  if (degradedCount >= 2) {
    return "Degraded"
  }

  if (statuses.every((s) => s === "Operational")) {
    return "Operational"
  }

  return "Unknown"
}

export function calculateConfidence(services) {
  const total = services.reduce(
    (sum, s) => sum + s.confidence,
    0
  )

  return Math.round(total / services.length)
}