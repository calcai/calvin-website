import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../index.css"
import aboutphoto1 from "../img/aboutphoto1.JPG"


const AboutPage = () => {
  return (
    <div>
        <div className = "container-fluid" id = "about-container">
            <h1 id = "primary">About Me</h1>
            <div className = "row">
              <div className = "col-lg">
                 <img src = {aboutphoto1} id = "aboutphoto1"/>
                </div>
                <div className = "col-lg">
                    <p>Hi, I'm Calvin, a computer science major interested in software and full-stack development. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage