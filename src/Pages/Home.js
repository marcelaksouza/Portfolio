import React, { Component } from 'react'
// import { Typewriter } from 'react-typewriting-effect'
import Typewriter from 'typewriter-effect';

import './home.css'
import Logo from '../Images/among_us_profile.png'

export class Home extends Component {
    render() {
        return (
            // <div className='home'>
            //     <img src={Logo} alt="Logo" className='app-logo' />
            //     <h1 className='logo-description-headind'>Hi, I am Marcela </h1>
            //     <p className='logo-description'></p>
            //     <Typewriter className='logo-description' 
            //     string={'I am a developer'}
            //     cursor='_'
            //     delay={75} 
            //     />
            // </div>
            <div className='home'>
                <img src={Logo} alt="Logo" className='app-logo' />
                
                <Typewriter
                options={{
                    skipAddStyles: true,
                    autoStart: true,
                    loop: false,
                    cursorClassName: 'cursor',
                    
                    
                  }}
                onInit={(typewriter) => {
                typewriter.typeString("<div class='description'><h1>Hi, I am Marcela </h1></div>")
                .typeString("<span> I am a developer</span>" )
                .pauseFor(2500)
                .deleteChars(10)
                .typeString("<span>data analist </span>")
                .start();
               }}
/>
            
            </div>
        )
    }
}

export default Home
