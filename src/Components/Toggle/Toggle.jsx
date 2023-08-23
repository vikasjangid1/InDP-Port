import React from 'react'
import './Toggle.css'

import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  const handleClick = () => {
    theme.dispatch({type: "toggle"})
  }

  return (
   <div className="toggle" onClick={handleClick}>
        <Moon/>
        <Sun/>
        <div className="t-button"  style={{
        transform: darkMode ? 'translateX(20px)' : 'translateX(0)',
        transition: 'transform 0.3s ease-in-out',
        position: darkMode? {left: "2px"} : {right : "2px"}
        }} >
        </div>
   </div>
  )
}

export default Toggle
