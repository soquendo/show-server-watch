# The Show Server Watch

Community-informed service status concept for MLB The Show.

![ The Show Server Watch Dashboard ] (screenshots/dashboard.png)

# Purpose

When MLB The Show displays connection errors such as “User Offline” or “Game Not Connected,” players often have no quick way to tell whether the issue is local or part of a wider server problem.

The Show Server Watch is a React dashboard concept designed to centralize reported service status, affected modes, confidence levels, and recent signal changes in one place.

# Core Questions

This dashboard is built to answer four questions quickly:

1. Are the servers currently having issues?
2. Which services or online modes appear affected?
3. How confident is the current status estimate?
4. What changed recently?

# Current Features

* Overall server status indicator
* Status-driven visual theme
* Service breakdown by online mode
* Player risk display
* Confidence and report counts
* Evidence section
* Event log for recent signal changes
* Modular React component structure

# Online Services Tracked

* Ranked
* Events
* Battle Royale
* Co-op
* Marketplace
* Companion App

# Tech Stack

* React
* Vite
* JavaScript
* CSS
* Component-based architecture

# Project Structure:
src/
├── components/
├── constants/
├── data/
├── utils/
├── App.jsx
└── App.css

# Future Roadmap

v1.1

* Auto-generated timestamps
* Derived overall status from service data
* Improved mobile layout
* More detailed evidence scoring

v1.2

* Live data source integration
* Official SDS update tracking
* Platform-specific status indicators
* Historical outage timeline

v2.0

* Public API endpoint
* Notification support
* Historical reliability metrics
* Embeddable status widget

# Project Goal

This project is designed as a product-focused frontend prototype that could fit naturally into an MLB The Show companion site such as ShowZone. It focuses on solving a real player problem with a clean interface, structured data, and maintainable React architecture.