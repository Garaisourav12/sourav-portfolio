import React from 'react'
import './style.scss'
import yt from '../../../assets/yt.png'

function ProjectCard() {
    return (
        <div className='project-card'>
            <div className="container">
                <img src={yt} alt="" />

                <div className="overlay"></div>

                <div className="outline"></div>

                <div className="details">
                    <h4 className="title">YouTube Clone</h4>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, fugit!</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard