import { STATUS } from "../constants/status"

export const scenarios = {
  operational: {
    metadata: {
        name: "Operational",
        generatedBy: "Scenario Engine",
        environment: "Mock",
    },

    overallStatus: {
      status: STATUS.OPERATIONAL,
      confidence: 99,
      updated: "Today • 4:15 PM EST",
      summary: "No widespread service issues detected.",
    },

    metrics: {
        totalReports: 0,
        affectedServices: 0,
        officialIncident: false,
        lastUpdated: "Today • 4:15 PM EST",
    },

    services: [],
    eventLog: [],
    evidence: [],
  },

  degraded: {
    metadata: {
        name: "Degraded",
        generatedBy: "Scenario Engine",
        environment: "Mock",
    },

    overallStatus: {
      status: STATUS.DEGRADED,
      confidence: 96,
      updated: "Today • 3:48 AM EST",
      summary: "Elevated community reports across online services.",
    },

    metrics: {
        totalReports: 339,
        affectedServices: 2,
        officialIncident: false,
        lastUpdated: "Today • 3:48 AM EST",
    },

    services: [
        {
            id: 1,
            service: "ranked",
            displayName: "Ranked",
            status: STATUS.DEGRADED,
            playerRisk: "High",
            confidence: 94,
            lastSignalMinutes: 2,
            reports: 147,
            officialStatement: false,
        },
        {
            id: 2,
            service: "events",
            displayName: "Events",
            status: STATUS.OPERATIONAL,
            playerRisk: "Low",
            confidence: 82,
            lastSignalMinutes: 8,
            reports: 12,
            officialStatement: false,
        },
        {
            id: 3,
            service: "battle-royale",
            displayName: "Battle Royale",
            status: STATUS.DEGRADED,
            playerRisk: "High",
            confidence: 91,
            lastSignalMinutes: 3,
            reports: 132,
            officialStatement: false,
        },
        {
            id: 4,
            service: "co-op",
            displayName: "Co-op",
            status: STATUS.UNKNOWN,
            playerRisk: "Medium",
            confidence: 48,
            lastSignalMinutes: 18,
            reports: 21,
            officialStatement: false,
        },
        {
            id: 5,
            service: "marketplace",
            displayName: "Marketplace",
            status: STATUS.OPERATIONAL,
            playerRisk: "Low",
            confidence: 88,
            lastSignalMinutes: 5,
            reports: 9,
            officialStatement: false,
        },
        {
            id: 6,
            service: "companion-app",
            displayName: "Companion App",
            status: STATUS.UNKNOWN,
            playerRisk: "Low",
            confidence: 52,
            lastSignalMinutes: 14,
            reports: 18,
            officialStatement: false,
        }
    ],

    eventLog: [
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
    ],

    
    evidence: [
        {
            name: "Official SDS Channels",
            status: "No recent updates",
            level: "neutral",
        },

        {
            name: "Community Reports",
            status: "Strong signal",
            level: "danger",
        },

        {
            name: "Marketplace",
            status: "Operational",
            level: "good",
        },

        {
            name: "Companion App",
            status: "Issues reported",
            level: "warning",
        },
    ],
  },

  majorOutage: {
    
    metadata: {
        name: "Major Outage",
        generatedBy: "Scenario Engine",
        environment: "Mock",
    },
    
    overallStatus: {
      status: STATUS.MAJOR_OUTAGE,
      confidence: 98,
      updated: "Today • 3:52 AM EST",
      summary: "Widespread connection issues detected across core online services.",
    },

    metrics: {
        totalReports: 812,
        affectedServices: 4,
        officialIncident: false,
        lastUpdated: "Today • 3:52 AM EST",
    },

    services: [],
    eventLog: [],
    evidence: [],
  },
}