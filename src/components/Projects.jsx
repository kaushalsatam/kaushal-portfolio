import React from "react";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import arrow from "../assets/arrow.png"

function Projects(){
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                <div className="details-container color-container">
                    <div className="article-container">
                        <img src={project1} alt="Project profile image" className="project-img"/>
                    </div>
                    <h2 className="experience-sub-title project-title">Project one</h2>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" 
                        onClick={() => {
                                    location.href = "https://github.com/kaushalsatam/weather-web-app"
                                }
                            }>
                            Source code
                        </button>
                        <button className="btn btn-color-1 project-btn" 
                        onClick={() => {
                                    location.href = "https://clearvue.onrender.com/"
                                }
                            }>
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className="details-container color-container">
                    <div className="article-container">
                        <img src={project2} alt="Project profile image" className="project-img"/>
                    </div>
                    <h2 className="experience-sub-title project-title">Project one</h2>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" 
                        onClick={() => {
                                    location.href = "https://github.com/kaushalsatam/weather-web-app"
                                }
                            }>
                            Source code
                        </button>
                        <button className="btn btn-color-1 project-btn" 
                        onClick={() => {
                                    location.href = "https://clearvue.onrender.com/"
                                }
                            }>
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className="details-container color-container">
                    <div className="article-container">
                        <img src={project3} alt="Project profile image" className="project-img"/>
                    </div>
                    <h2 className="experience-sub-title project-title">Project one</h2>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" 
                        onClick={() => {
                                    location.href = "https://github.com/kaushalsatam/weather-web-app"
                                }
                            }>
                            Source code
                        </button>
                        <button className="btn btn-color-1 project-btn" 
                        onClick={() => {
                                    location.href = "https://clearvue.onrender.com/"
                                }
                            }>
                            Live Demo
                        </button>
                    </div>
                </div>
                </div>
            </div>
            <img src={arrow} alt="Arrow" className="icon arrow" onClick={() => {
                location.href="./#contact";
            }}/>
        </section>
    )
}

export default Projects;