import React from 'react'
import hlogo1 from '../../assets/hlogo1.png'
import hlogo2 from '../../assets/hlogo2.png'
import hlogo3 from '../../assets/hlogo3.jpg'
import hlogo4 from '../../assets/hlogo4.png'
import hlogo5 from '../../assets/hlogo5.png'
import hlogo6 from '../../assets/hlogo6.png'
import './Brands.css'

const Brands = () => {
  return (
    <div className='brand-container'>
      <div className="brand-header">
        <h2>Featured Brands</h2>
      </div>
      <div className="brand-pics">
        <div className="pic-text">
          <a href="/"><img src={hlogo1} alt="" />
          </a>
        </div>
        <div className="pic-text">
          <a href="/"><img src={hlogo2} alt="" />
          </a>
        </div>
        <div className="pic-text">
          <a href="/"><img src={hlogo3} alt="" />
          </a>
        </div>
        <div className="pic-text">
          <a href="/"><img src={hlogo4} alt="" />
          </a>
        </div>
        <div className="pic-text">
          <a href="/"><img src={hlogo5} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Brands