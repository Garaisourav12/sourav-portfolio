import React, { useRef } from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import { FaArrowUpLong } from "react-icons/fa6";
import CustomPointer from './components/customPointer/CustomPointer'


function App() {
    const homeRef = useRef();
    const aboutRef = useRef();
    const skillsRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef();

    return (
        <div className='main'>
            <CustomPointer />
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <button className="scroll-top pointers" onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }}>
                <FaArrowUpLong />
            </button>
        </div>
    )
}

export default App