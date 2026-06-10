export const STATUS = {
  OPERATIONAL: "Operational",
  DEGRADED: "Degraded",
  MAJOR_OUTAGE: "Major Outage",
  UNKNOWN: "Unknown",
}

export function getStatusClass(status) {
  return status.toLowerCase().replaceAll(" ", "-")
}