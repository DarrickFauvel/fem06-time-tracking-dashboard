import { useEffect, useState } from 'react'
import './scss/main.scss'
import Card from './components/Card'
import Badge from './components/Badge'

function App() {
  const [times, setTimes] = useState([])
  const [activeTimeframe, setActiveTimeframe] = useState('Weekly')

  const fetchData = async () => {
    const res = await fetch('/data/data.json')
    const data = await res.json()
    setTimes(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <header className='header'>
        {/* Visually hidden h1 for accessibility */}
        <h1 className='visually-hidden'>Time tracking dashboard</h1>
      </header>

      <main>
        <div className='container'>
          <Badge
            activeTimeframe={activeTimeframe}
            setActiveTimeframe={setActiveTimeframe}
          />

          {times.map((time, index) => {
            return (
              <Card time={time} activeTimeframe={activeTimeframe} key={index} />
            )
          })}
        </div>
      </main>
    </>
  )
}

export default App
