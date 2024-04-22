import React from "react";
import profilePicture from "../assets/Kaushal-Profile.jpeg";
import resume from "../assets/Kaushal Satam - Resume.pdf";
import linkedIn from "../assets/linkedin.png";
import github from "../assets/github.png";

function Profile(){
    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src={profilePicture} alt="Kaushal profile picture" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Kaushal Satam</h1>
                <p className="section__text__p2">Full Stack Developer</p>
                <div className="btn-container">
                    <button className="btn btn-color-2" onClick={() => {
                        window.open(resume)
                    }}>Download CV</button>
                    <button className="btn btn-color-1" onClick={() => {
                        location.href="./#contact";
                    }}>Contact Info</button>
                </div>
                <div id="socials-container">
                    <img src={linkedIn} alt="My LinkedIn profile" className="icon" onClick={() => {
                        location.href="https://www.linkedin.com/in/kaushalsatam/"
                    }}/>
                    <img src={github} alt="My Github profile" className="icon" onClick={() => {
                        location.href="https://www.github.com/kaushalsatam/"
                    }}/>
                </div>
            </div>
        </section>
    )
}

export default Profile;