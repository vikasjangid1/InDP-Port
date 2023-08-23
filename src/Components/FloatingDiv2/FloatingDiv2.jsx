import React from 'react';
import './FloatingDiv2.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const FloatingDiv = ({image2, txt3, txt4}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const floatText = darkMode?  'darkText' : 'lightText';
  return (
    <div>
      <div className="floatingdiv2">
        <img src={image2} alt="" />
        <span className={floatText}>
            {txt3}
            <br />
            {txt4}
        </span>
      </div>
    </div>
  )
}

export default FloatingDiv
