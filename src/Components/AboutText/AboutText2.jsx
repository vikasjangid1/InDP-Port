import React from 'react'
import globe from '../../img/globe.png'
import './AboutText2.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';

const AboutText2 = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // const mainBox = darkMode? "mainbox2" : "mainbox3";

  return (
        <div className="mainbox3">
            <img src={globe} className="globeImg" />
            <div className="globeBox">
              <span className="globe">WANT TO  <span className="globe2">KNOW  MORE</span></span>
            </div>
        </div>
  )
}

export default AboutText2
