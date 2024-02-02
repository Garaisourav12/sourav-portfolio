import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'

function App() {
    return (
        <div className='main'>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App