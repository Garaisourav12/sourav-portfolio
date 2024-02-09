import React, { useEffect, useState } from 'react'
import { Link, scroller } from 'react-scroll';

function MenuBox({className}) {
    const [activeLink, setActiveLink] = useState('home');

    const handleScroll = () => {
        let sectionOffsets = {
            home: document.getElementById('home')?.offsetTop - 70,
            about: document.getElementById('about')?.offsetTop - 70,
            skills: document.getElementById('skills')?.offsetTop - 70,
            projects: document.getElementById('projects')?.offsetTop - 70,
            contact: document.getElementById('contact')?.offsetTop - 70,
        };

        console.log(sectionOffsets);

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

    const scrollToSection = (section) => {
        window.scrollTo({
            top: document.getElementById(section)?.offsetTop - 30,
            behavior: 'smooth'
        });
        // setActiveLink(section);
    };
    return (
        <div className={`menus ${className?className:''}`}>
            <Link
                className={`menu ${activeLink === 'home' ? 'active' : ''}`}
                smooth={true}
                duration={500}
                onClick={() => scrollToSection('home')}
            >
                Home
            </Link>
            <Link
                className={`menu ${activeLink === 'about' ? 'active' : ''}`}
                // to="about"
                smooth={true}
                duration={500}
                onClick={() => scrollToSection('about')}
            >
                About
            </Link>
            <Link
                className={`menu ${activeLink === 'skills' ? 'active' : ''}`}
                // to="skills"
                smooth={true}
                duration={500}
                onClick={() => scrollToSection('skills')}
            >
                Skills
            </Link>
            <Link
                className={`menu ${activeLink === 'projects' ? 'active' : ''}`}
                // to="projects"
                smooth={true}
                duration={500}
                onClick={() => scrollToSection('projects')}
            >
                Projects
            </Link>
            <Link
                className={`menu ${activeLink === 'contact' ? 'active' : ''}`}
                // to="contact"
                smooth={true}
                duration={500}
                onClick={() => scrollToSection('contact')}
            >
                Contact
            </Link>
        </div>
    )
}

export default MenuBox