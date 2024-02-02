import React from 'react'
import './style.scss'
import Wrapper from '../wrapper/Wrapper'
import EducationCard from './educationCard/EducationCard'

function About() {
    return (
        <Wrapper>
            <div className='about'>
                <h2>About</h2>
                <div className="container">
                    <div className="intro">
                        <h3>Introduction</h3>
                        <q>
                        I'm Sourav Garai. I'm from Kolkata, West Bengal. I graduated with a BTech in Computer Science from CGEC in 2022.
                        <br />
                        <br />
                        Currently, I'm immersed in learning the MERN stack at Accio Job, where I'm sharpening my skills in JavaScript, React, HTML, and CSS.
                        With proficiency in Redux, SCSS, and Tailwind CSS, I've embarked on numerous personal projects to refine my craft.
                        <br />
                        <br />
                        In addition to my frontend skills, I have a solid foundation in Core Java.
                        <br />
                        <br />
                        Now, I'm eagerly seeking entry-level opportunities as a frontend developer to apply my expertise and contribute to impactful projects.
                        </q>
                    </div>
                    <div className="education">
                        <h3>Educations</h3>
                        <EducationCard />
                        <EducationCard />
                        <EducationCard />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default About