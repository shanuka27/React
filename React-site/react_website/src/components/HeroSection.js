import React from 'react'
import './Button.css'
import '../App.css'
import './HeroSection.css'
import { Button } from './Button'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWITS</h1>
      <p>what are yor waiting for?</p>
      <div className='hero-btns'>
        <button  
          className='btn btn--outline btn--large'
          // buttonStyle='btn--outline' 
          // buttonSize='btn--large'
        >
            GET STARTED
        </button>            
        <button 
          className='btn btn--primary btn--large' 
          // buttonStyle='btn--primary' 
          // buttonSize='btn--large'
        >
            WATCH TRAILER<i className='far fa-play-circle' />
        </button>
      </div>
    </div>
  )
}

export default HeroSection