import React from "react";
import about from "../assets/Kaushal-About.jpeg";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import arrow from "../assets/arrow.png";

function About(){
    return (
        <section id="about">
            <p className="section__text__p1">Get to know more</p>
            <h1 className="title">About me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img src={about} alt="Kaushal Satam profile" className="about-pic"/>
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img src={experience} alt="experience icon" className="icon" />
                            <h3>Experience</h3>
                            <p>Fresher | Open to work <br />Full Stack Developement</p>
                        </div>
                        <div className="details-container">
                            <img src={education} alt="education icon" className="icon" />
                            <h3>Education</h3>
                            <p>B. Sc. Computer Science <br />Masters Of Computer Application</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis autem voluptate quisquam minus quam pariatur consectetur, voluptates, excepturi exercitationem accusamus officiis expedita! Soluta facilis distinctio mollitia explicabo ea, saepe tenetur voluptatum repellendus accusantium. Sapiente ea reprehenderit ut praesentium veniam omnis quasi ipsam illo? Ut, perferendis non harum dolorem impedit sed?</p>
                    </div>
                </div>
            </div>
            <img src={arrow} alt="Arrow" className="icon arrow" onClick={() => {
                location.href="./#experience";
            }}/>
        </section>
    )
}

export default About;