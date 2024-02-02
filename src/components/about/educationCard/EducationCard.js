import React from 'react'
import './style.scss'

function EducationCard() {
    return (
        <div className='education-card'>
            <div className="card">
                <h4>
                    Bachelor of Technology (Computer Science & 
                    Engineering)
                </h4>
                <p>
                    Cooch Behar Government Engineering College
                </p>
                <div className="details">
                    <h5>07/2018 – 06/2022</h5>
                    <h5>CGPA : 8.96</h5>
                </div>
            </div>
        </div>
    )
}

export default EducationCard