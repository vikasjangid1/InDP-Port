import React from 'react'
import './Works.css'
import metablock from "../../img/MB.png"
import NLA from "../../img/NLA.png"
import chain from "../../img/chain.png"
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
   <div className="works">
      {/* left side */}
        <div className="awesome worksmain">
            <span style={{color: darkMode? 'white' : ''}}>Works for All these</span>
            <span>Brands & Clients</span>
            <span>Through collaborating with these brands, I honed <br/>my skills as a frontend developer, pushing the<br/> boundaries of achievable work. They played a <br /> pivotal role in enhancing my expertise, and <br />their impact is showcased in my portfolio.</span>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

       {/* right side */}
        <div className="w-right">
            <motion.div
            initial={{rotate: 45}}
            whileInView={{rotate: 0}}
            viewport={{margin: '-40px'}}
            transition={{duration: 3.5, type: 'spring'}}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={metablock} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={NLA} alt="" />
                </div>   

                <div className="w-secCircle">
                    <img src={chain} alt="" />
                </div>   

                <div className="w-secCircle">
                    <img src={NLA} alt="" />
                </div>   

                <div className="w-secCircle">
                    <img src={metablock} alt="" />
                </div>   
            </motion.div>

           {/* background circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
        
   </div>
  )
}

export default Works
