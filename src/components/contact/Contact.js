import React from 'react'
import './style.scss'
import Wrapper from '../wrapper/Wrapper'

function Contact() {
    return (
        <Wrapper>
            <div className='contact'>
                <h2>Contact Me</h2>
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
                            action="https://formspree.io/your_form_id"
                            method="POST"
                        >
                            <input type="hidden" name="_replyto" />
                            <input className='inp' type="text" name="name" placeholder="Your Name" required />
                            <input className='inp' type="email" name="email" placeholder="Your Email" required />
                            <input className='inp' type="text" name="subject" placeholder="Subject" required />
                            <textarea name="message" className='text-area' rows={6} placeholder="Message" required></textarea>
                            <button className='submit pointer' type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Contact