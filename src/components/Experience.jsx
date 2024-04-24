import React from "react";
import checkMark from "../assets/checkmark.png";
import arrow from "../assets/arrow.png";

function Experience(){
    return (
        <section id="experience">
            <p className="section__text__p1">Explore my</p>
            <h1 className="title">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Frontend Developement</h2>
                        <div className="article-container">
                            <article>
                                <img src={checkMark} alt="checkmark" className="icon"/>
                                <div>
                                    <h3>HTML</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkMark} alt="checkmark" className="icon"/>
                                <div>
                                    <h3>CSS</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkMark} alt="checkmark" className="icon"/>
                                <div>
                                    <h3>TailwindCSS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkMark} alt="checkmark" className="icon"/>
                                <div>
                                    <h3>Javascript</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkMark} alt="checkmark" className="icon"/>
                                <div>
                                    <h3>React</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkMark} alt="checkmark" className="icon"/>
                                <div>
                                    <h3>EJS</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">Backend Developement</h2>
                        <div className="article-container">
                            <article>
                                <img src={checkMark} alt="checkmark" className="icon"/>
                                <div>
                                    <h3>Node</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkMark} alt="checkmark" className="icon"/>
                                <div>
                                    <h3>Express</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkMark} alt="checkmark" className="icon"/>
                                <div>
                                    <h3>PostgreSQL</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkMark} alt="checkmark" className="icon"/>
                                <div>
                                    <h3>REST API</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkMark} alt="checkmark" className="icon"/>
                                <div>
                                    <h3>Git/Github</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <img src={arrow} alt="Arrow" className="icon arrow" onClick={() => {
                location.href="./#projects";
            }}/>
        </section>
    )
}

export default Experience;