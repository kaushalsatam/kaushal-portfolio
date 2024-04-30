import React from "react";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";

function Contact() {
    return (
        <section id="contact">
            <p className="section__text__p1">Get In Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img src={email} alt="Email" className="icon contact-icon email-icon"/>
                    <p><a href="mailto:satamkaushal@gmail.com">satamkaushal@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img src={linkedin} alt="LinkedIn" className="icon contact-icon"/>
                    <p><a href="https://www.linkedin.com/in/kaushalsatam/">LinkedIn</a></p>
                </div>
            </div>
        </section>
    )
}

export default Contact;