import React from 'react'
import iconEllipsis from '../images/icon-ellipsis.svg'

const Card = ({ time, activeTimeframe }) => {
  const { title, timeframes } = time
  const timeframeClassName = title.split(' ').join('').toLowerCase()

  return (
    <div className={`card ${timeframeClassName}`}>
      <div className='card__content'>
        <div className='card__content-header'>
          <h3>{title}</h3>
          <a href='##'>
            <img src={iconEllipsis} alt='options' />
          </a>
        </div>
        <div className='card__content-body'>
          <h4>{timeframes.weekly.current}hrs</h4>
          <p>Last Week - {timeframes.weekly.previous}hrs</p>
        </div>
      </div>
    </div>
  )
}

export default Card
