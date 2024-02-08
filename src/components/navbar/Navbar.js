import React, { useState } from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
import Wrapper from '../wrapper/Wrapper'
import { MdOutlineMenu } from "react-icons/md";
import RightDrawer from './RightDrawer';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className='header'>
            <Wrapper>
                <nav className='navbar'>
                    <div className="logo pointer">
                        <span>S</span>ourav <span>.</span>
                    </div>
                    <div className='menus'>
                        <NavLink className={'menu'} to="/" activeclassname="active">Home</NavLink>
                        <NavLink className={'menu'} to="/about" activeclassname="active">About</NavLink>
                        <NavLink className={'menu'} to="/skills" activeclassname="active">Skills</NavLink>
                        <NavLink className={'menu'} to="/projects" activeclassname="active">Projects</NavLink>
                        <NavLink className={'menu'} to="/contact" activeclassname="active">Contact</NavLink>
                    </div>
                    <MdOutlineMenu className='toggle-menu' onClick={() => setOpen(true)} />
                </nav>
                <div className="mobile-drawer">
                    <RightDrawer open={open} setOpen={setOpen} />
                </div>
            </Wrapper>
        </header>
    )
}

export default Navbar