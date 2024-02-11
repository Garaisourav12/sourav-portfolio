import React from 'react'
import './style.scss'
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
    return (
        <div className='project-card pointers'>
            <div className="container">
                <img src={project?.image} alt="" />

                <div className="overlay"></div>

                <div className="outline"></div>

                <div className="details">
                    <h4 className="title">{project?.title}</h4>
                    <p className="description">{project?.description}</p>
                    <div className="project-links">
                        <a href={project?.repo_link} target='_blank'>
                            <FaGithub />
                        </a>
                        <a href={project?.live_link} target='_blank'>
                            <FiExternalLink />
                        </a>    
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard