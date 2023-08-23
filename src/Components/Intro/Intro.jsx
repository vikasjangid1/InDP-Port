import React, { useState, useEffect }from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Twitter from '../../img/twitter.png';
import profile from '../../img/boy12.png';
import Eth from '../../img/eth.png';
import Crown from '../../img/crown.png';
import glassesemoji from '../../img/glassesemoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import FloatingDiv2 from '../FloatingDiv2/FloatingDiv2';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';
// import gsap from 'gsap';
// import withTransition from '../../Transition';

const Intro = () => {

  const [initialLoad, setInitialLoad] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const preLoaderAnimDuration = 4000; // Duration of the preloader animation in milliseconds

    // On component mount, set the initialLoad state to true
    setInitialLoad(true);

    // After the preloader animation duration, set initialLoad to false and indicate that animation is complete
    const timeoutId = setTimeout(() => {
      setInitialLoad(false);
      setAnimationComplete(true);
    }, preLoaderAnimDuration);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  
  // Dynamically set the delay based on initialLoad state
  const delay = initialLoad ? 4 : animationComplete ? 0 : 4;
  

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const classForTitle = darkMode ? 'animate-dark' : 'animate-character';
  return (
    <div>
      <div className="intro">

        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white' : ''}}>Greetings! I'm</span>
                <span style={{color: darkMode? 'white' : ''}}>Vikas Jangid</span>
                <span className={classForTitle} >Frontend Developer</span>
                <span>I like to craft captivating user experiences using React.And a passion for the blockchain space, I fuse innovation and design seamlessly.</span>
            </div>

            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
            <button className="button i-button">
              Drop me a Line
            </button>
            </Link>

            <div className="i-icons">
                <a href="https://github.com/vikasjangid1">
                <img src={Github} className='img' alt="" />
                </a>

                <a href="https://www.linkedin.com/in/vikas-jangid-51ba25252/">
                <img src={LinkedIn} className='img'  alt="" />
                </a>

                <a href="https://twitter.com/VikasJa94063683">
                <img src={Twitter} className='img'  alt="" />
                </a>
            </div>
        </div>

        <div className="i-right">
          <img src={profile} alt="" />
          <motion.img
          initial={{left: '-36%'}}
          whileInView={{left: '-24%'}}
          transition={{ duration: 2, type: 'spring', delay: delay }} 
          src={glassesemoji} 
          className='floating-div1'
          alt="" />

          <motion.div
          initial={{right: '-12%'}}
          whileInView={{right: '-5%'}}
          transition={{ duration: 2, type: 'spring', delay: delay }} 
          style={{top:'-5%', right:'-7%'}}
          className='floating-div2'>

            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
          </motion.div> 

          <motion.div 
          initial={{left: '-2%'}}
          whileInView={{left: '-10%'}}
          transition={{ duration: 2, type: 'spring', delay: delay }} 
          style={{bottom:'26%',left:'-2%'}}
          className='floating-div3'>

            <FloatingDiv2 image2={Eth} txt3='Blockchain' txt4='Proponent'/>
          </motion.div> 

          {/* blur div's */}

          <div className='blur' style={{background:"rgb(238 210 255)"}}></div>

          <div className='blur' style={{background:"#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem"}}></div>
        </div>

      </div>
    </div>
  )
}

export default Intro;
