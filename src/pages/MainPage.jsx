import React from 'react'
import '../index.css'
import homephoto from '../img/homephoto2.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from '@mui/material/Button';
import Resume from '../Calvin Cai Resume.pdf'


const MainPage = () => {

  return (
    <div>
      <div className = "container-fluid" id = "container1">
        <div className = "row">
          <div className = "col-sm" id = "row1">
            <div id = "name" className = "title">Calvin<br/>Cai</div>
            <h1 id = "secondary" className = "title">Software Engineer</h1>
            <p id = "small">Motivated computer science student at Case Western Reserve University with experience using a multitude of technolgies and always looking to learn more.</p>
            <Button variant="contained" style = {{maxWidth: "90px"}} onClick = {() => window.open(Resume)}>Resume</Button>
          </div>
          <div className= "col-sm">
            <img src = {homephoto} className = 'circle'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage