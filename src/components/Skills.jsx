import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../index.css"
import {DiJava, DiPython, DiJavascript1, DiHtml5, DiCss3, DiReact, DiBootstrap, DiGit, DiGithubBadge} from "react-icons/di"

const Skills = () => {
    return (
        <>
        <p id = "skills" >Languages:</p>
            <div className = "row">
                <div className = "col-sm">
                    <div style={{display: "flex", justifyContent: "center"}}>  
                        <DiJava color = "#ADD8E6" size = "2.2vw"/>
                    </div> 
                    <p id = "skills">Java</p>
                </div>
                <div className = "col-sm">
                    <div style={{display: "flex", justifyContent: "center"}}>  
                        <DiPython color = "#ADD8E6" size = "2.2vw"/>
                    </div>
                    <p id = "skills">Python</p>
                </div>
                <div className = "col-sm">
                    <div style={{display: "flex", justifyContent: "center"}}>  
                        <DiJavascript1 color = "#ADD8E6" size = "2.2vw"/>
                    </div>
                    <p id = "skills">JavaScript</p>
                </div>
                <div className = "col-sm">
                    <div style={{display: "flex", justifyContent: "center"}}>  
                        <DiHtml5 color = "#ADD8E6" size = "2.2vw"/>
                    </div>
                    <p id = "skills">HTML5</p>
                </div>
                <div className = "col-sm">
                    <div style={{display: "flex", justifyContent: "center"}}>  
                        <DiCss3 color = "#ADD8E6" size = "2.2vw"/>
                    </div>
                    <p id = "skills">CSS3</p>
                </div>
            </div>
            <p id = "skills" >Technologies:</p>
            <div class = "row">
                <div className = "col-sm">
                    <div style={{display: "flex", justifyContent: "center"}}>  
                        <DiReact color = "#ADD8E6" size = "2.2vw"/>
                    </div>
                    <p id = "skills">React.js</p>
                </div>
                <div className = "col-sm">
                    <div style={{display: "flex", justifyContent: "center"}}>  
                        <DiBootstrap color = "#ADD8E6" size = "2.2vw"/>
                    </div>
                    <p id = "skills">Bootstrap</p>
                </div>
                <div className = "col-sm">
                    <div style={{display: "flex", justifyContent: "center"}}>  
                        <DiGit color = "#ADD8E6" size = "2.2vw"/>
                    </div>
                    <p id = "skills">Git</p>
                </div>
                <div className = "col-sm">
                    <div style={{display: "flex", justifyContent: "center"}}>  
                        <DiGithubBadge color = "#ADD8E6" size = "2.2vw"/>
                    </div>
                    <p id = "skills">GitHub</p>
                </div>
            </div>
        </>
    )
}

export default Skills