import React from 'react'
import "./Services.css"
import Card from '../Card/Card'
import Card2 from '../Card2/Card2'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Block from "../../img/on chain.png"
import Resume from "../Services/Resume 2.pdf"
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';

const Services = () => {
  const transition = {duration: 1, type: 'spring'} ; 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return ( 
    <div className='services' id='Services'>

        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white' : ''}}>Service</span>
            <span>offerings</span>
            <span>Proficient in developing interactive UI's and<br /> possessing knowledge of the blockchain industry,<br /> enabling me to create innovative solutions.</span>
            <a href={Resume} download>
            <button className="button s-button">Get my CV</button>
            </a> 
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="cards">

            {/* first card */}
            <motion.div 
            initial={{left: '21rem'}}
            whileInView={{left: '14rem'}}
            transition={transition}
            >
              <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={"Canva, Microsoft Powerpoint, Microsoft Visio, Filmora"}
              />
            </motion.div>

            {/* second card */}
            <motion.div 
            initial={{left: '-11rem', top: '13rem'}}
            whileInView={{left: '-4rem'}}
            transition={transition}
            >
              <Card
              emoji={Glasses}
              heading={"Development"}
              detail={"React JS, HTML5, CSS3, Javascript, Github, API Integration, Tailwind CSS"}
              />
            </motion.div>

            {/* third card */}
            <motion.div 
            initial={{ top: "19rem", left: "21rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}            
            >
              <Card2
              emoji={Block}
              heading={"Blockchain"}
              detail={"Bitcoin, Blockchain Architecture, Cryptography, Ethereum, Solidity, Defi, Dapp"}
              />
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services;
