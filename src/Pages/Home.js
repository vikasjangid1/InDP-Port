import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Intro from "../Components/Intro/Intro";
import Services from "../Components/Services/Services";
import Experience from '../Components/Experience/Experience';
import Works from '../Components/Works/Works';
import Portfolio from '../Components/Portfolio/Portfolio';
// import AboutText from '../Components/AboutText/AboutText';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import transition from "../Transition";
import './Home.css';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Services/> 
        <Experience/>
        <Works/>
        <Portfolio/>
        {/* <AboutText/> */}
        <Contact/>
        <Footer/>
    </div>
  )
}

export default transition(Home);
