import React from 'react'
import './style.scss'
import Social from '../social/Social'
import MenuBox from '../MenuBox'


function Footer() {
    return (
        <footer className='footer'>
            {<MenuBox />}
            <Social />
            <p className="dev">
                Developed with 🧡 by Sourav.
            </p>
        </footer>
    )
}

export default Footer