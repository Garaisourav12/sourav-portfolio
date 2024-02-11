import React from 'react'
import './style.scss'
import Wrapper from '../wrapper/Wrapper'
import Social from '../social/Social'
import TypedText from '../TypedText'

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

                    <div className="resume pointer pointers">Resume</div>
                </div>

                <div className="right">
                    <div className="img-box">

                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default Home