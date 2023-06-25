import React from 'react'
import '../index.css'
import homephoto from '../img/homephoto2.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from '@mui/material/Button';
import Resume from '../CalvinCaiResume2023.pdf'


const MainPage = () => {

  return (
    <div>
      <div className = "container-fluid" id = "container1">
        <div className = "row">
          <div className = "col-lg" id = "row1">
            <div id = "name" className = "title">Calvin<br/>Cai</div>
            <h1 id = "secondary" className = "title">Software Engineer</h1>
            <p id = "small">Computer science student at Case Western Reserve University with experience with a multitude of technolgies.</p>
          </div>
          <div className= "col-lg">
            <img src = {homephoto} className = 'circle'/>
          </div>
        </div>
        <div className = "row" id = "row2">
          <Button variant="contained" style = {{maxWidth: "90px"}} onClick = {() => window.open(Resume)}>Resume</Button>
        </div>
      </div>
    </div>
  )
}

export default MainPage