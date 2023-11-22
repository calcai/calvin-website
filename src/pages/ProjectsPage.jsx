import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card1 from '../components/Projects/Card1'
import Card2 from '../components/Projects/Card2'
import Card3 from '../components/Projects/Card3'
import Card4 from '../components/Projects/Card4'
import Card7 from '../components/Projects/Card7'
import Card5 from '../components/Projects/Card5'
import Card6 from '../components/Projects/Card6'
import Card8 from '../components/Projects/Card8'
import Experience1 from '../components/Experience/Experience1';
import Experience2 from '../components/Experience/Experience2';

const ProjectsPage = () => {
  return (
    <>
    <div>
      <h1 className = "centered" id = "primary">Relevant Experience</h1>
      <div className = "container-fluid">
        <div className = "row"><div className = "col"><Experience2/></div><div className = "col"><Experience1/></div></div>
      </div>
      <h1 className = "centered" id = "primary">Projects</h1>
      <div className = "container-fluid">
        <div className = "row"><div className = "col"><Card1/></div><div className = "col"><Card2/></div></div>
        <div className = "row"><div className = "col"><Card8/></div><div className = "col"><Card5/></div></div>
        <div className = "row"><div className = "col"><Card6/></div><div className = "col"><Card7/></div></div>
        <div className = "row"><div className = "col"><Card4/></div><div className = "col"><Card3/></div></div>
      </div>
    </div>
    </>
  )
}

export default ProjectsPage