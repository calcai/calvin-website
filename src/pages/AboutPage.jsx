import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../index.css"
import aboutphoto1 from "../img/aboutphoto1.JPG"
import aboutphoto2 from "../img/aboutphoto2.JPG"
import {DiJava, DiPython, DiJavascript1, DiHtml5, DiCss3, DiReact, DiBootstrap, DiGit, DiGithubBadge} from "react-icons/di"


const AboutPage = () => {
  return (
    <div>
        <div className = "container-fluid" id = "about-container" style = {{marginBottom: "100px"}}>
            <h1 id = "primary">About Me</h1>
            <div className = "row">
              <div className = "col-lg">
                 <img src = {aboutphoto1} id = "aboutphoto1"/>
                </div>
                <div className = "col-lg">
                    <p>Hi, I'm Calvin, a computer science major interested in software and full-stack development with a strong understanding of Agile Development. I am skilled in the following areas:</p>
                    <p id = "skills" >Languages:</p>
                    <div className = "row">
                        <div className = "col-sm">
                            <div style={{display: "flex", justifyContent: "center"}}>  
                                <DiJava color = "#ADD8E6" size = "40px"/>
                            </div> 
                            <p id = "skills">Java</p>
                        </div>
                        <div className = "col-sm">
                            <div style={{display: "flex", justifyContent: "center"}}>  
                                <DiPython color = "#ADD8E6" size = "40px"/>
                            </div>
                            <p id = "skills">Python</p>
                        </div>
                        <div className = "col-sm">
                            <div style={{display: "flex", justifyContent: "center"}}>  
                                <DiJavascript1 color = "#ADD8E6" size = "40px"/>
                            </div>
                            <p id = "skills">JavaScript</p>
                        </div>
                        <div className = "col-sm">
                            <div style={{display: "flex", justifyContent: "center"}}>  
                                <DiHtml5 color = "#ADD8E6" size = "40px"/>
                            </div>
                            <p id = "skills">HTML5</p>
                        </div>
                        <div className = "col-sm">
                            <div style={{display: "flex", justifyContent: "center"}}>  
                                <DiCss3 color = "#ADD8E6" size = "40px"/>
                            </div>
                            <p id = "skills">CSS3</p>
                        </div>
                    </div>
                    <p id = "skills" >Technologies:</p>
                    <div class = "row">
                        <div className = "col-sm">
                            <div style={{display: "flex", justifyContent: "center"}}>  
                                <DiReact color = "#ADD8E6" size = "40px"/>
                            </div>
                            <p id = "skills">React.js</p>
                        </div>
                        <div className = "col-sm">
                            <div style={{display: "flex", justifyContent: "center"}}>  
                                <DiBootstrap color = "#ADD8E6" size = "40px"/>
                            </div>
                            <p id = "skills">Bootstrap</p>
                        </div>
                        <div className = "col-sm">
                            <div style={{display: "flex", justifyContent: "center"}}>  
                                <DiGit color = "#ADD8E6" size = "40px"/>
                            </div>
                            <p id = "skills">Git</p>
                        </div>
                        <div className = "col-sm">
                            <div style={{display: "flex", justifyContent: "center"}}>  
                                <DiGithubBadge color = "#ADD8E6" size = "40px"/>
                            </div>
                            <p id = "skills">GitHub</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className = "container-fluid" id = "about-container"style = {{marginBottom: "100px"}}>
            <div className = "row">
                <div className = "col-lg">
                    <p>Outside of programming, my biggest passion is wrestling, which I compete in at the Division III level for Case Western Reserve University. Through my first two seasons, I have started for the team both years at the 157 lb weight class. Some of my accolades consist of the following: </p>
                    <ul>
                        <li>2023 NCAA Central Region 5th Place Finish</li>
                        <li>2023 NWCA Scholar-All American</li>
                        <li>2023 UAA All-Academic Honoree</li>
                        <li>CWRU Athletics 2023 Arthur P. Leary Award Winner</li>
                    </ul>
                    <p>In my free time, I love to travel and explore nature, try new coffee shops, and play spikeball.</p>
                </div>
                <div className = "col-lg">
                    <img src = {aboutphoto2}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage