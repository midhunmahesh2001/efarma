import React from 'react'
import './Highlights.css'
import diabetes from '../../assets/daibetes.jpg'
import heart from './../../assets/heartpic.jpg'
import liver from './../../assets/Liver.jpg'
import stomach from './../../assets/stomach.jpg'

const Highlights = () => {
  return (
    <div className='High-container'>
        <div className='high-header'>
            <h1>Shop by Health Concerns</h1>
        </div>
        <div className="high-medcines">
            <a href="/">
            <div className='high-card'>
                <img src={diabetes} alt="" />
                <h3>Diabetes Mellitus</h3>
                <p>Diabetes mellitus is a condition where the body can't regulate blood sugar properly due to insulin issues.</p>
            </div>
            </a>
            <a href="/"><div className='high-card'>
                <img src={heart} alt="" />
                <h3>Heart Disease</h3>
                <p>Heart disease refers to conditions affecting the heart's structure or function, often leading to serious health issues like heart attacks or heart failure.</p>
            </div></a>
            <a href="/"><div className='high-card'>
                <img src={liver} alt="" />
                <h3>Liver Disease</h3>
                <p>Liver disease includes various conditions that impair liver function, such as hepatitis or cirrhosis, potentially leading to serious health complications.</p>
            </div></a>
            <a href="/"><div className='high-card'>
                <img src={stomach} alt="" />
                <h3>Stomach Pain</h3>
                <p>Stomach pain is discomfort in the abdominal area, often caused by indigestion, infection, or digestive issues.</p>
            </div></a>
        </div>
    </div>
  )
}

export default Highlights