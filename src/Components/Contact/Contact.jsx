import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const [done,setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();

      const allFieldsFilled = Array.from(form.current.elements).every((field) => field.value.trim() !== '');

      if (!allFieldsFilled) {
        //  Handle validation error (e.g., display an error message)
        alert("Please complete all the required fields.")
        return;
      }

      emailjs.sendForm('service_pa1nfk4', 'template_awo3o1b', form.current, '_29dROSxeW0Ri97uH')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            form.current.reset();
            setTimeout(() => {
                setDone(false); // Hide the "Thanks for contacting me!" message after 5 seconds
              }, 5000);
        })
        .catch((error) => {
            console.log(error.text);
        });
    };


  return (
   <div className="contact-form" id='Contact'>
    <div className="w-left">
        <div className=" awesome1">
            <span style={{color: darkMode? 'white' : ''}}>Reach out,</span>
            <span>Share Ideas or</span>
            <span style={{color: darkMode? 'white' : ''}}>Connect via Email.</span>
            <div className="blur s-blur1 s-blur2" style={{background: "#ABF1FF94"}}>
            </div>
        </div>
    </div>

    <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className='user' placeholder='Your Name'/>
            <input type="email" name="user_email" className='user' placeholder='Your Email'/>
            <textarea name="message" className='user' placeholder='Message' />
            <input type="submit" value="Say Hello" className='button'/>
            <span className={`success-message ${done ? '' : 'hidden'}`}>{done && "Thanks for contacting me!"}</span>
            <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
        </form>
    </div>
   </div>
  )
}

export default Contact
