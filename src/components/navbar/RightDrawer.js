import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { NavLink } from 'react-router-dom';

function RightDrawer({open, setOpen}) {
    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={() => setOpen(false)}
            className='drawer'
        >
            <div className='mobile-menus'>
                <NavLink className={'menu'} to="/" activeclassname="active">Home</NavLink>
                <NavLink className={'menu'} to="/about" activeclassname="active">About</NavLink>
                <NavLink className={'menu'} to="/skills" activeclassname="active">Skills</NavLink>
                <NavLink className={'menu'} to="/projects" activeclassname="active">Projects</NavLink>
                <NavLink className={'menu'} to="/contact" activeclassname="active">Contact</NavLink>
            </div> 
        </Drawer>
    );
}

export default RightDrawer;