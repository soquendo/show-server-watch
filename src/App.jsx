import './App.css'
import StatusRing from './components/StatusRing'
import TopMetrics from './components/TopMetrics'
import ModeCard from './components/ModeCard'
import LiveSignals from './components/LiveSignals'
import { scenarios } from './data/scenarios'
import EventLog from './components/EventLog'
import { getStatusClass } from './utils/statusUtils'

function App() {
  const currentScenario = scenarios.degraded
  const overallStatus = currentScenario.overallStatus
  const onlineModes = currentScenario.services
  const appStatusClass = getStatusClass(overallStatus.status)

  return (
    <main className={`app-shell ${appStatusClass}`}>
      <section className="hero-dashboard">
        <StatusRing status={overallStatus} />

        <div className="hero-copy">
          <p className="eyebrow">The Show</p>
          <h1>Server Watch</h1>
          <p>Real-time server intelligence for MLB The Show.</p>

          <TopMetrics status={overallStatus} />
        </div>
      </section>

      <section className="dashboard-panel">
        <div className="section-title">
          <h2>Services</h2>
          <p>Current reported status by service.</p>
        </div>

        <div className="service-grid">
          {onlineModes.map((mode) => (
            <ModeCard key={mode.id} mode={mode} />
          ))}
        </div>
      </section>

      <EventLog events={currentScenario.eventLog} />
      <LiveSignals evidence={currentScenario.evidence} />
      
    </main>
  )
}

export default App