import React from 'react'
import './style.scss'
import resumeFile from '../../assets/Sourav Garai Resume jan, 2024.pdf';
import Wrapper from '../wrapper/Wrapper'
import Social from '../social/Social'
import TypedText from '../TypedText'
import logo from '../../assets/logo.png'

function Home() {
    return (
        <Wrapper>
            <section className='home' id='home' name='home'>
                <div className="left">
                    <div className="intro">
                        <h2>Hello, It's Me</h2>
                        <h1>Sourav Garai</h1>
                        <h2>And I'm a <TypedText /></h2>
                    </div>
                    <p className="summary">
                    As an aspiring frontend developer well-versed in JavaScript, React, HTML, and CSS, I'm proficient in Redux for advanced state management. Furthermore, I'm keen on utilizing SCSS and Tailwind CSS to enhance styling efficiency. Dedicated to continuous improvement, I aim to deliver exceptional user experiences that exceed client expectations.
                    </p>

                    <Social />

                    <a href={resumeFile} className="resume pointers" download={'Sourav Garai Resume.pdf'}>Resume</a>
                </div>

                <div className="right">
                    <div className="img-box">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default Home