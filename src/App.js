import { useEffect, useState } from 'react'
import './scss/main.scss'
import Card from './components/Card'
import Badge from './components/Badge'

function App() {
  const [times, setTimes] = useState([])

  const fetchData = async () => {
    const res = await fetch('/data/data.json')
    const data = await res.json()
    // console.log(data)
    setTimes(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='container'>
      <Badge />

      {times.map((time, index) => {
        return <Card time={time} key={index} />
      })}
    </div>
  )
}

export default App
