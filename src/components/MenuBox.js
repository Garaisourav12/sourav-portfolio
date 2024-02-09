import React, { useEffect, useState } from 'react'

function MenuBox({className, flag}) {
    const initialScroll = () => {
        const headerHeight = document.getElementById('header')?.offsetHeight;
        let sectionOffsets = {
            home: document.getElementById('home')?.offsetTop - headerHeight,
            about: document.getElementById('about')?.offsetTop - headerHeight,
            skills: document.getElementById('skills')?.offsetTop - headerHeight,
            projects: document.getElementById('projects')?.offsetTop - headerHeight,
            contact: document.getElementById('contact')?.offsetTop - headerHeight,
        };

        const scrollPosition = window.scrollY;

        // Determine which section is currently in view
        let activeSection = '';
        Object.entries(sectionOffsets).forEach(([section, offset]) => {
        if (scrollPosition >= offset && scrollPosition < offset + window.innerHeight) {
            activeSection = section;
        }
        });

        return activeSection;
    };

    const [activeLink, setActiveLink] = useState(flag? initialScroll() : 'home');

    const handleScroll = () => {
        const headerHeight = document.getElementById('header')?.offsetHeight;
        let sectionOffsets = {
            home: document.getElementById('home')?.offsetTop - headerHeight,
            about: document.getElementById('about')?.offsetTop - headerHeight,
            skills: document.getElementById('skills')?.offsetTop - headerHeight,
            projects: document.getElementById('projects')?.offsetTop - headerHeight,
            contact: document.getElementById('contact')?.offsetTop - headerHeight,
        };

        const scrollPosition = window.scrollY;

        // Determine which section is currently in view
        let activeSection = '';
        Object.entries(sectionOffsets).forEach(([section, offset]) => {
        if (scrollPosition >= offset && scrollPosition < offset + window.innerHeight) {
            activeSection = section;
        }
        });

        setActiveLink(activeSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const scrollToSection = (section) => {
        const headerHeight = document.getElementById('header')?.offsetHeight - 1;
        window.scrollTo({
            top: document.getElementById(section)?.offsetTop - headerHeight,
            behavior: 'smooth'
        });
        setActiveLink(section)
    };

    return (
        <div className={`menus ${className?className:''}`}>
            <a
                className={`menu ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
            >Home</a>
            <a
                className={`menu ${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
            >About</a>
            <a
                className={`menu ${activeLink === 'skills' ? 'active' : ''}`}
                onClick={() => scrollToSection('skills')}
            >Skills</a>
            <a
                className={`menu ${activeLink === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
            >Projects</a>
            <a
                className={`menu ${activeLink === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
            >Contact</a>
        </div>
    )
}

export default MenuBox;