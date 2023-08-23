import React from 'react'
import './AboutText.css'
import AboutText2 from './AboutText2'
import {Link as RouterLink} from 'react-router-dom';

const AboutText = () => {
  return (
    <div className='M-about'>
              <h1 className='secondtext'>AB</h1>
            <RouterLink to="/About">
              <AboutText2/>
            </RouterLink>
              <h1 className='secondtext2'>UT ME</h1>
    </div>
  )
}

export default AboutText
