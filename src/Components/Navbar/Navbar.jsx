import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link as ScrollLink} from 'react-scroll';
import {Link } from 'react-router-dom';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import Headroom from 'react-headroom';

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const liMode = darkMode? 'liDark' : 'liLight'; 

  return (
    <div>
      <Headroom className='headroom' style={{
  webkitTransition: 'all .5s ease-in-out',
  mozTransition: 'all .5s ease-in-out',
  oTransition: 'all .5s ease-in-out',
  transition: 'all .5s ease-in-out'
}}>
        {/* <Header/> */}
      <div className="n-wrapper">
        <div className="n-left">
            <span className="n-name" >Vikas.</span>
            <Toggle/> 
        </div>

        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link to="/" style={{textDecoration:"none"}}>
                      <li className={liMode} onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} id='Home'>Home</li>
                    </Link>
                    {/* <Link to="/About" style={{textDecoration:"none"}}>
                      <li className={liMode}>About</li>
                    </Link> */}
                    <ScrollLink spy={true} to='Services' smooth={true} activeClass='activeClass'>
                      <li className={liMode}>Services</li>
                    </ScrollLink>
                    <ScrollLink spy={true} to='Experiences' smooth={true} activeClass='activeClass'>
                      <li className={liMode}>Experiences</li>
                    </ScrollLink>
                    <ScrollLink spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                      <li className={liMode}>Portfolio</li>
                    </ScrollLink>
                </ul>
            </div>
            
            <Link to="https://linktr.ee/vikas.jangid">
            <button className="button n-button" >
                Network
            </button>
            </Link>
        </div>

      </div>
      </Headroom>
    </div>
  )
}

export default Navbar;