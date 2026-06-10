import './App.css'
import StatusRing from './components/StatusRing'
import TopMetrics from './components/TopMetrics'
import ModeCard from './components/ModeCard'
import { overallStatus, onlineModes } from './data/statusData'

function App() {
  return (
    <main>
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
          <h2>Game Services</h2>
          <p>Mode-specific risk based on server signals.</p>
        </div>

        <div className="service-grid">
          {onlineModes.map((mode) => (
            <ModeCard key={mode.id} mode={mode} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App