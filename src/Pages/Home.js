import React, { Component } from 'react'
import { Typewriter } from 'react-typewriting-effect'

import './home.css'
import Logo from './flower.jpg'

export class Home extends Component {
    render() {
        return (
            <div className='home'>
                <img src={Logo} alt="Logo" className='app-logo' />
                <h1 className='logo-description-headind'>Hi, I am Marcela </h1>
                <p className='logo-description'></p>
                <Typewriter className='logo-description' 
                string={'This is an example of typewriting 😄'}
                cursor='_'
                delay={100} 
                stopBlinkinOnComplete/>
            </div>
        )
    }
}

export default Home
