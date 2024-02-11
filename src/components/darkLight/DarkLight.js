import React, { useEffect, useState } from 'react'
import './style.scss'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function DarkLight() {
    const [mode, setMode] = useState('false');
    const [open, setOpen] = useState('false');
    useEffect(() => {
        if(!mode) {
            document.documentElement.style.setProperty('--theme-bg', 'var(--bs-body-color)');
            document.documentElement.style.setProperty('--theme-card', 'var(--bs-dark)');
            document.documentElement.style.setProperty('--theme-text', 'var(--bs-white)');
            document.documentElement.style.setProperty('--theme-text-2', 'var(--bs-gray-400)');
        }
        else {
            document.documentElement.style.setProperty('--theme-bg', 'var(--bs-white)');
            document.documentElement.style.setProperty('--theme-card', 'var(--bs-gray-200)');
            document.documentElement.style.setProperty('--theme-text', 'var(--bs-dark)');
            document.documentElement.style.setProperty('--theme-text-2', 'var(--bs-body-color)');
        }
    }, [mode])

    const handleClick = (e) => {
        e.target.classList.toggle('spin');
        setTimeout(() => {
            e.target.classList.toggle('spin');
            setMode(!mode)
        }, 1000)
    }

    return (
        <div className="dark-light">
            {
                open ? (
                    <FaChevronRight className='pointer pointers arrow' onClick={() => {
                        document.querySelector('.dark-light').style.right = '-2.8rem';
                        setOpen(!open)
                    }} />
                ) : (
                    <FaChevronLeft className='pointer pointers arrow' onClick={() => {
                        document.querySelector('.dark-light').style.right = '.5rem';
                        setOpen(!open)
                    }} />
                )
            }

            <button className='pointer pointers' onClick={handleClick} >
                {mode ? (
                    <MdDarkMode />
                ) : (
                    <MdLightMode />
                )}
            </button>
        </div>
    )
}

export default DarkLight