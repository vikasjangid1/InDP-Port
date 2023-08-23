import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
// import {Link} from 'react-scroll';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Discord from '@iconscout/react-unicons/icons/uil-discord'
import Youtube from '@iconscout/react-unicons/icons/uil-youtube'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
        <img src={Wave} alt="" />
        <div className="f-head">
            <div className="f-content">
                <div className="sitemap">
                    <span>01/ SITEMAP</span>
                    <span onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>HOME</span>
                    {/* <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
                    </Link> */}
                    <a href=""><span>ABOUT</span></a>
                    <a href="mailto:vikasjangid.dev@gmail.com"><span>CONTACT</span></a>
                </div>
                <div className="f-icons">
                    <span className='spanone'>02/ SOCIALS</span>
                    <a href="https://www.linkedin.com/in/vikas-jangid-51ba25252/"><div><Linkedin color='white' size='1.3rem'/><span>LINKEDIN</span></div></a>
                    <a href="https://twitter.com/VikasJa94063683"><div><Twitter color='white' size='1.3rem'/><span>TWITTER</span></div></a>
                    <a href="https://discord.com/users/Vikas%20Jangid#5495"><div><Discord color='white' size='1.3rem'/><span>DISCORD</span></div></a>
                    <a href="https://github.com/vikasjangid1"><div><Github color='white' size='1.3rem'/><span>GITHUB</span></div></a>
                    <a href="https://www.instagram.com/vikas.uttam_/"><div><Insta color='white' size='1.3rem'/><span>INSTAGRAM</span></div></a>
                    <a href="https://youtube.com/@vikasjangid3177"><div><Youtube color='white' size='1.3rem'/><span>YOUTUBE</span></div></a>
                </div>
                <div className="mid-content">
                    <a href="mailto:vikasjangid.dev@gmail.com"><span>LET'S WORK TOGETHER</span></a>
                    <span>&copy; {currentYear}</span>
                </div>
            </div>

            <div className="f-name">
                <marquee behavior="scroll" direction="left" scrollamount="25">DESIGNED & DEVELOPED BY VIKAS JANGID</marquee>
            </div>
        </div>
    </div>
)
}

export default Footer
