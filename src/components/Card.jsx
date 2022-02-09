import React, { useState } from 'react'
import profileImage from '../images/image-jeremy.png'
import iconEllipsis from '../images/icon-ellipsis.svg'

const Card = (props) => {
  const [timeframe, setTimeframe] = useState('weekly')

  const Profile = () => {
    return (
      <div className='card profile'>
        <div className='card__header'>
          <img src={profileImage} alt='profile' />
          <div className='card__header-text'>
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
          </div>
        </div>
        <div className='card__tabs'>
          <a href='##'>Daily</a>
          <a href='##' className='active'>
            Weekly
          </a>
          <a href='##'>Monthly</a>
        </div>
      </div>
    )
  }

  const Time = ({ time }) => {
    const { title, timeframes } = time
    const timeframeClassName = title.split(' ').join('').toLowerCase()

    return (
      <div className={`card time ${timeframeClassName}`}>
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

  const renderComponent = props.profile ? (
    <Profile />
  ) : (
    <Time time={props.time} />
  )

  return renderComponent
}

export default Card
