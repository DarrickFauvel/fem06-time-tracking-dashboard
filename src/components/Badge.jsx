import React from 'react'
import badgeImage from '../images/image-jeremy.png'

const Badge = ({ activeTimeframe, setActiveTimeframe }) => {
  const timeframes = ['Daily', 'Weekly', 'Monthly']

  return (
    <div className='badge'>
      <div className='badge__header'>
        <img src={badgeImage} alt='Jeremy Robson' />
        <p>Report for</p>
        <h2>Jeremy Robson</h2>
      </div>
      <div className='badge__tabs'>
        {timeframes.map((timeframe) => {
          const classProperty = timeframe === activeTimeframe ? 'active' : ''
          return (
            <a
              href='/'
              className={classProperty}
              onClick={(e) => {
                e.preventDefault()
                setActiveTimeframe(timeframe)
              }}
              key={timeframe}>
              {timeframe}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Badge
