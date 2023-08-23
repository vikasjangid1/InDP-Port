import React, {useEffect} from 'react'
import './Preloader.css'
import {preLoaderAnim} from '../../Animations/Index'

const Preloader = () => {
  useEffect(()=>{
        // Call the animation function
    preLoaderAnim();

    // Calculate the expected duration of the animation and set a timeout
    const animationDuration = 3000; // Replace this with the estimated duration of your animation
    setTimeout(() => {
      // After the timeout, scroll to top
      window.scrollTo(0, 0);
    }, animationDuration);

    // Clean up the event listener
    return () => {
      window.onbeforeunload = null;
    };
  },[]);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibe.</span>
      </div>
    </div>
  )
}

export default Preloader
