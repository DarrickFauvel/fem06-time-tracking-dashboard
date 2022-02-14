import React from 'react'
import iconEllipsis from '../images/icon-ellipsis.svg'

const Card = ({ time, activeTimeframe }) => {
  const { title, timeframes } = time
  const { daily, weekly, monthly } = timeframes
  const timeframeClassName = title.split(' ').join('').toLowerCase()

  let currentHours
  let previousHours
  if (activeTimeframe === 'Daily') {
    currentHours = daily.current
    previousHours = daily.previous
  } else if (activeTimeframe === 'Weekly') {
    currentHours = weekly.current
    previousHours = weekly.previous
  } else if (activeTimeframe === 'Monthly') {
    currentHours = monthly.current
    previousHours = monthly.previous
  }

  return (
    <div className={`card ${timeframeClassName}`}>
      <div className='card__content'>
        <div className='card__content-header'>
          <h3>{title}</h3>
          <a href='##'>
            <img src={iconEllipsis} alt='options' className='icon-ellipsis' />
          </a>
        </div>
        <div className='card__content-body'>
          <h4>{currentHours}hrs</h4>
          <p>Last Week - {previousHours}hrs</p>
        </div>
      </div>
    </div>
  )
}

export default Card
