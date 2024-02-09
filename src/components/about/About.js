import React from 'react'
import './style.scss'
import Wrapper from '../wrapper/Wrapper'
import EducationCard from './educationCard/EducationCard'

function About() {
    let educations = [
        {
            degree: 'Bachelor of Technology (Computer Science & Engineering)',
            institute: 'Cooch Behar Government Engineering College',
            duration: '07/2018 – 06/2022',
            gradeType: 'CGPA',
            grade: 8.96
        },
        {
            degree: 'Higher Secondary (WBCHSE)',
            institute: 'Islamganj High Madrasah',
            duration: '05/2015 – 05/2017',
            gradeType: 'Percentage',
            grade: 82
        },
        {
            degree: 'Secondary (WBBSE)',
            institute: 'Bangaljhi Ramkrishna Ashram High School',
            duration: '01/2014 – 05/2015',
            gradeType: 'Percentage',
            grade: 85.85
        }
    ];
    
    return (
        <Wrapper>
            <section className='about' id='about' name='about'>
                <h2>Get to Know Me</h2>
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
                        <div className="ed-container">
                            {
                                educations.map((educatiion, index) => (
                                    <EducationCard ed={educatiion} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default About