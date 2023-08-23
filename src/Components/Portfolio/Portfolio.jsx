import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import chainlink from '../../img/chainlink.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import Pass from '../../img/pass-gen.jpg'
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const one = darkMode? 'oneDark' : 'oneLight';
  const two = darkMode? 'twoDark' : 'twoLight';
  const three = darkMode? 'threeDark' : 'threeLight';
  return (
   <div className="portfolio" id='Portfolio'>
    {/* heading */}
    <span style={{color: darkMode? 'white' : ''}}>Recent Accomplishments</span>
    <span>Gallery</span>
    <p className='para'>
      <span className={one} >Take a look</span>
      <span className={two} >at the Work</span> 
      <span className={three} >What I've done</span>
    </p>

    {/* slider  */}
    <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
      <SwiperSlide>
        <a href="https://agrisure-dapp.vercel.app/">
        <img src={chainlink} />
        </a> 
      </SwiperSlide>

      <SwiperSlide>
        <a href="https://password-generator-vjuttam017-gmailcom.vercel.app/">
        <img src={Pass} />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="https://dev-link-sigma.vercel.app/">
        <img src={HOC} />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="https://dev-link-sigma.vercel.app/">
        <img src={MusicApp} />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="https://dev-link-sigma.vercel.app/">
        <img src={Ecommerce}  />
        </a>
      </SwiperSlide>
    </Swiper>
   </div>
  )
}

export default Portfolio
 