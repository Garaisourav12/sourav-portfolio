import React from 'react'
import './style.scss';
import { GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";

function Social() {
    return (
        <div className='social-group'>
            <a href='' className="social-circle">
                <GrGithub />
            </a>
            <a href='' className="social-circle">
                <GrLinkedinOption />
            </a>
            <a href='' className="social-circle">
                <GrMail />
            </a>
            <a href='' className="social-circle">
                <FaWhatsapp />
            </a>
        </div>
    )
}

export default Social