import React, { useEffect, useState } from 'react'
import './style.scss'
import Wrapper from '../wrapper/Wrapper'
import { useForm } from '@formspree/react';
import ButtonLoader from '../ButtonLoader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [state, sendData] = useForm("mnqepazb");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [toasterShow, setToasterShow] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        setToasterShow(true)
        sendData(e);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    useEffect(() => {
        if (toasterShow && (!state.submitting) && state.succeeded) {
            toast.success('Message Sent Successfully!', { autoClose: 5000 });
            setToasterShow(false);
        }
    }, [state.succeeded, toasterShow, state.succeeded]);

    return (
        <Wrapper>
            <ToastContainer />
            <section className='contact' id='contact' name='contact'>
                <h2>Let's Connect</h2>
                <div className="contact-container">
                    <div className="left">
                        <q className="content">
                        Thank you for taking the time to review my portfolio. If you're interested in know more about me and my work or would like to discuss potential employment opportunities, I would love to hear from you!I work hard and wiil be great asset for you. You can reach me using the contact information
                        </q>
                        <div className="contact-detail">
                            <h3>Address</h3>
                            <p>Kolkata, West Bengal</p>
                        </div>
                        <div className="contact-detail">
                            <h3>Phone No.</h3>
                            <a href='tel:+919732224977'>+919732224977</a>
                        </div>
                        <div className="contact-detail">
                            <h3>Email</h3>
                            <a href='mailto:garaisourav12@gmail.com'>garaisourav12@gmail.com</a>
                        </div>
                    </div>
                    <div className="right">
                        <form
                            method="POST"
                            onSubmit={handleSubmit}
                        >
                            {/* <input value="garaisourav12@gmail.com" type="hidden" name="_replyto" /> */}
                            <input value={formData.name} onChange={handleChange} className='inp' type="text" name="name" placeholder="Your Name" required />

                            <input value={formData.email} onChange={handleChange} className='inp' type="email" name="email" placeholder="Your Email" required />

                            <input value={formData.subject} onChange={handleChange} className='inp' type="text" name="subject" placeholder="Subject" required />

                            <textarea value={formData.message} onChange={handleChange} name="message" className='text-area' rows={6} placeholder="Message" required></textarea>

                            <button className='submit pointer' type="submit">
                                {state.submitting?(
                                    <ButtonLoader/>
                                ):('Send Message')}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default Contact