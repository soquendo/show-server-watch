import { STATUS } from "../constants/status"

export const overallStatus = {
  status: STATUS.DEGRADED,
  confidence: "Medium",
  updated: "Today • 4:45 PM EST",
  summary:
    "Community reports indicate connectivity issues affecting some online modes.",
}

export const onlineModes = [
  {
    id: 1,
    name: "Ranked",
    status: STATUS.DEGRADED,
    impact: "High",
  },
  {
    id: 2,
    name: "Events",
    status: STATUS.OPERATIONAL,
    impact: "Low",
  },
  {
    id: 3,
    name: "Battle Royale",
    status: STATUS.DEGRADED,
    impact: "High",
  },
  {
    id: 4,
    name: "Co-op",
    status: STATUS.UNKNOWN,
    impact: "Medium",
  },
  {
    id: 5,
    name: "Marketplace",
    status: STATUS.OPERATIONAL,
    impact: "Low",
  },
  {
    id: 6,
    name: "Companion App",
    status: STATUS.UNKNOWN,
    impact: "Low",
  },
]