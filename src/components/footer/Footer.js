import React from 'react'
import './style.scss'
import Social from '../social/Social'
import MenuBox from '../MenuBox'
import { FaHeart } from "react-icons/fa";


function Footer() {
    return (
        <footer className='footer'>
            {<MenuBox />}
            <Social />
            <p className="dev">
                Developed with {<FaHeart/>} by Sourav.
            </p>
        </footer>
    )
}

export default Footer