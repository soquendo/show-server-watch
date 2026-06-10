import './App.css'
import Header from './components/Header'
import StatusCard from './components/StatusCard'
import ModeCard from './components/ModeCard'
import { overallStatus, onlineModes } from './data/statusData'

function App() {
  return (
    <main>
      <Header />

      <StatusCard overallStatus={overallStatus} />

      <section>
        <h2>Online Mode Impact</h2>

        {onlineModes.map((mode) => (
          <ModeCard key={mode.id} mode={mode} />
        ))}
      </section>
    </main>
  )
}

export default App