import React from 'react'
import adimg from './../../assets/pointOldMan.png'
import './Advertise.css'

function Advertise() {
  return (
    <div className='adContainer'>
      <div className="advertise-img">
        <img src={adimg} alt="" />
      </div>
      <div className='ad-text'>
        <h1>Get 5% saving on your Order</h1>
      </div>
    </div>
  )
}

export default Advertise