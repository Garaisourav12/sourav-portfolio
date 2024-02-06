import React from 'react'
import './style.scss'

function EducationCard({ed}) {
    return (
        <div className='education-card'>
            <div className="card">
                <h4>
                    {ed?.degree}
                </h4>
                <p>
                    {ed?.institute}
                </p>
                <div className="details">
                    <h5>{ed?.duration}</h5>
                    <h5>{ed?.gradeType} : {ed?.grade}</h5>
                </div>
            </div>
        </div>
    )
}

export default EducationCard