import React from 'react'
import './Card2.css'

const Card = ({emoji,heading,detail}) => {
  return (
    <div className="card2">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">DISCOVER</button>
    </div>
  )
}

export default Card
