import React from 'react';
import './FloatingDiv.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const FloatingDiv = ({image, txt1, txt2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const floatText = darkMode?  'darkText' : 'lightText';
  return (
    <div>
      <div className="floatingdiv">
        <img src={image} alt="" />
        <span className={floatText}>
            {txt1}
            <br />
            {txt2}
        </span>
      </div>
    </div>
  )
}

export default FloatingDiv
