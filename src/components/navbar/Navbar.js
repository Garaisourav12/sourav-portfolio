import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
import Wrapper from '../wrapper/Wrapper'

function Navbar() {
    return (
        <header className='header'>
            <Wrapper>
                <nav className='navbar'>
                    <div className="logo pointer">
                        <span>S</span>ourav.
                    </div>
                    <div className='menus'>
                        <NavLink className={'menu'} to="/" activeclassname="active">Home</NavLink>
                        <NavLink className={'menu'} to="/about" activeclassname="active">About</NavLink>
                        <NavLink className={'menu'} to="/skills" activeclassname="active">Skills</NavLink>
                        <NavLink className={'menu'} to="/projects" activeclassname="active">Projects</NavLink>
                        <NavLink className={'menu'} to="/contact" activeclassname="active">Contact</NavLink>
                    </div>
                </nav>
            </Wrapper>
        </header>
    )
}

export default Navbar