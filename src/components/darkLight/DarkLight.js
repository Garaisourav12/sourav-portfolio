import React, { useEffect, useState } from 'react'
import './style.scss'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";

function DarkLight() {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(false);
    const [theme, setTheme] = useState('orange')

    useEffect(() => {
        if(!mode) {
            document.documentElement.style.setProperty('--theme-bg', 'var(--bs-body-color)');
            document.documentElement.style.setProperty('--theme-card', 'var(--bs-dark)');
            document.documentElement.style.setProperty('--theme-text', 'var(--bs-white)');
            document.documentElement.style.setProperty('--theme-text-2', 'var(--bs-gray-400)');
            document.documentElement.style.setProperty('--theme-shadow', 'var(--bs-gray-600)');
        }
        else {
            document.documentElement.style.setProperty('--theme-bg', 'var(--bs-white)');
            document.documentElement.style.setProperty('--theme-card', 'var(--bs-gray-200)');
            document.documentElement.style.setProperty('--theme-text', 'var(--bs-dark)');
            document.documentElement.style.setProperty('--theme-text-2', 'var(--bs-body-color)');
            document.documentElement.style.setProperty('--theme-shadow', 'var(--bs-gray-800)');
        }
    }, [mode])

    useEffect(() => {
        document.documentElement.style.setProperty('--theme', `var(--bs-${theme})`);
    }, [theme])

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
                        document.querySelector('.dark-light').style.right = '-13.5rem';
                        setOpen(false)
                    }} />
                ) : (
                    <FaChevronLeft className='pointer pointers arrow' onClick={() => {
                        document.querySelector('.dark-light').style.right = '.5rem';
                        setOpen(true)
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

            <div className="themes">
                <button 
                    className={`pointer pointers theme ${theme==='orange'?'active':''}`}
                    style={{
                        backgroundColor: 'var(--bs-orange)'
                    }}
                    onClick={() => {setTheme('orange')}}
                ></button>
                <button 
                    className={`pointer pointers theme ${theme==='purple'?'active':''}`}
                    style={{
                        backgroundColor: 'var(--bs-purple)'
                    }}
                    onClick={() => {setTheme('purple')}}
                ></button>
                <button 
                    className={`pointer pointers theme ${theme==='blue'?'active':''}`}
                    style={{
                        backgroundColor: 'var(--bs-blue)'
                    }}
                    onClick={() => {setTheme('blue')}}
                ></button>
                <button 
                    className={`pointer pointers theme ${theme==='yellow'?'active':''}`}
                    style={{
                        backgroundColor: 'var(--bs-yellow)'
                    }}
                    onClick={() => {setTheme('yellow')}}
                ></button>
                <button 
                    className={`pointer pointers theme ${theme==='green'?'active':''}`}
                    style={{
                        backgroundColor: 'var(--bs-green)'
                    }}
                    onClick={() => {setTheme('green')}}
                ></button>
            </div>
        </div>
    )
}

export default DarkLight