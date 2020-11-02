import React, { Component } from 'react'
import { Typewriter } from 'react-typewriting-effect'

import './home.css'
import Logo from '../Images/among_us_profile.png'

export class Home extends Component {
    render() {
        return (
            <div className='home'>
                <img src={Logo} alt="Logo" className='app-logo' />
                <h1 className='logo-description-headind'>Hi, I am Marcela </h1>
                <p className='logo-description'></p>
                <Typewriter className='logo-description' 
                string={'I am a developer'}
                cursor='_'
                delay={75} 
                />
            </div>
        )
    }
}

export default Home
