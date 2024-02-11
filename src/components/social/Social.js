import React from 'react'
import './style.scss';
import { GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";

function Social() {
    return (
        <div className='social-group'>
            <a href='https://github.com/Garaisourav12' target='_blank' className="social-circle pointers">
                <GrGithub />
            </a>
            <a href='https://www.linkedin.com/in/sourav-garai-9a4891199/' target='_blank' className="social-circle pointers">
                <GrLinkedinOption />
            </a>
            <a href='mailto:garaisourav12@gmail.com' target='_blank' className="social-circle pointers">
                <GrMail />
            </a>
            <a href='https://api.whatsapp.com/send?phone=919732224977' target='_blank' className="social-circle pointers">
                <FaWhatsapp />
            </a>
        </div>
    )
}

export default Social