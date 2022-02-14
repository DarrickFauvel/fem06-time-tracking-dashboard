import React from 'react'
import iconEllipsis from '../images/icon-ellipsis.svg'

const Card = ({ time, activeTimeframe }) => {
  const { title, timeframes } = time
  const { daily, weekly, monthly } = timeframes
  const timeframeClassName = title.split(' ').join('').toLowerCase()

  let currentHours
  let previousHours
  let previousTitle = ''
  if (activeTimeframe === 'Daily') {
    currentHours = daily.current
    previousHours = daily.previous
    previousTitle = 'Yesterday'
  } else if (activeTimeframe === 'Weekly') {
    currentHours = weekly.current
    previousHours = weekly.previous
    previousTitle = 'Last Week'
  } else if (activeTimeframe === 'Monthly') {
    currentHours = monthly.current
    previousHours = monthly.previous
    previousTitle = 'Last Month'
  }

  return (
    <div className={`card ${timeframeClassName}`}>
      <div className='card__content'>
        <h3>{title}</h3>
        <a href='#'>
          <img src={iconEllipsis} alt='options' className='icon-ellipsis' />
        </a>
        <h4>{currentHours}hrs</h4>
        <p>
          {previousTitle} - {previousHours}hrs
        </p>
      </div>
    </div>
  )
}

export default Card
