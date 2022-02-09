import React from 'react'
import badgeImage from '../images/image-jeremy.png'

const Badge = (props) => {
  return (
    <div className='badge'>
      <div className='badge__header'>
        <img src={badgeImage} alt='Jeremy Robson' />
        <div className='badge__header-text'>
          <p>Report for</p>
          <h2>Jeremy Robson</h2>
        </div>
      </div>
      <div className='badge__tabs'>
        <a href='##'>Daily</a>
        <a href='##' className='active'>
          Weekly
        </a>
        <a href='##'>Monthly</a>
      </div>
    </div>
  )
}

export default Badge
