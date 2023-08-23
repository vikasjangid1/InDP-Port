import React from 'react'
import './Error.css'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className='errormain'>
      <div className="errortext">
        <span style={{ "--i": 1 }}>4</span>
        <span style={{ "--i": 2 }}>0</span>
        <span style={{ "--i": 3 }}>4 <span> </span></span>
        <span style={{ "--i": 4 }}>E</span>
        <span style={{ "--i": 5 }}>R</span>
        <span style={{ "--i": 6 }}>R</span>
        <span style={{ "--i": 7 }}>O</span>
        <span style={{ "--i": 8 }}>R <span> </span></span>
        <span style={{ "--i": 9 }}>P</span>
        <span style={{ "--i": 10 }}>A</span>
        <span style={{ "--i": 11 }}>G</span>
        <span style={{ "--i": 12 }}>E</span>
      </div>
      <p>Sorry, This page doesn't exist.</p>
      <NavLink to="/">
      <button className='c-button'>Back to Home Page</button>
      </NavLink>
    </div>
  )
}

export default Error
