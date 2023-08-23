import './App.css'
import Error from './Pages/Error'
import {Helmet} from "react-helmet";
// import Navbar from "./Components/Navbar/Navbar";
// import Intro from "./Components/Intro/Intro";
// import Services from "./Components/Services/Services";
// import Experience from './Components/Experience/Experience';
// import Works from './Components/Works/Works';
// import Portfolio from './Components/Portfolio/Portfolio';
// import AboutText from './Components/AboutText/AboutText';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';

import Home from './Pages/Home'
// import About from './Pages/About'
import { themeContext } from './Context';
import { useContext } from 'react';
import Preloader from './Components/Preloader/Preloader';
import {Routes, Route, useLocation, useMatch} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

// import withTransition  from './Transition';

function App() { 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const forApp = darkMode? 'App2' : 'App';
  const location = useLocation();
  const matchErrorRoute = useMatch('/:any*');
  
    // Determine whether to show the preloader based on the current route
    const shouldShowPreloader = !matchErrorRoute;

  return (
    <div className={forApp} style={{
      background : darkMode? "black" : '',
      color : darkMode? 'white': ''}}> 
        <Helmet>
          <meta charSet="utf-8" />
          <title>Vikas Jangid</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="My Personal Portfolio" />
        </Helmet>
        {/* Conditionally render the Preloader */}
      {shouldShowPreloader && <Preloader />}
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.path}>
            <Route index element={<Home/>}/>
            {/* <Route path='about' element={<About/>}/> */}
            <Route path="/:any*" element={<Error/>}/>
          </Routes>
        </AnimatePresence>
        
            
        {/* <Navbar/>
        <Intro/>
        <Services/>
        <Experience/>
        <Works/>
        <Portfolio/>
        <AboutText/>
        <Contact/>
        <Footer/> */}
      
      {/* 
        <Routes location={location} key={location.pathname}>
          <Route index element={<AnimatedIntro/>}/>
          <Route path='/about' element={<AnimatedAbout/>}/>
        </Routes>
       */}
    </div>
  );
}

export default App;
