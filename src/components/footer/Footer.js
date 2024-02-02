import React from 'react'
import './style.scss'
import Social from '../social/Social'
import { NavLink } from 'react-router-dom'


function Footer() {
    return (
        <div className='footer'>
            <div className='menus'>
                <NavLink className={'menu'} to="/" activeclassname="active">Home</NavLink>
                <NavLink className={'menu'} to="/about" activeclassname="active">About</NavLink>
                <NavLink className={'menu'} to="/skills" activeclassname="active">Skills</NavLink>
                <NavLink className={'menu'} to="/projects" activeclassname="active">Projects</NavLink>
                <NavLink className={'menu'} to="/contact" activeclassname="active">Contact</NavLink>
            </div>
            <Social />
            <p className="dev">
                Developed with 🧡 by Sourav.
            </p>
        </div>
    )
}

export default Footer