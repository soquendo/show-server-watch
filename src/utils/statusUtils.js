import { STATUS } from "../constants/status"

export function getStatusColor(status) {
  switch (status) {
    case STATUS.OPERATIONAL:
      return "#22c55e"

    case STATUS.DEGRADED:
      return "#fbbf24"

    case STATUS.MAJOR_OUTAGE:
      return "#ef4444"

    default:
      return "#94a3b8"
  }
}

export function getStatusClass(status) {
  return status.toLowerCase().replaceAll(" ", "-")
}

export function getRiskStars(impact) {
  switch (impact) {
    case "High":
      return "★★★★★"

    case "Medium":
      return "★★★☆☆"

    default:
      return "★☆☆☆☆"
  }
}