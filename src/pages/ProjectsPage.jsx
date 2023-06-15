import React from 'react'
import Card1 from '../components/Projects/Card1'
import Card2 from '../components/Projects/Card2'
import Card3 from '../components/Projects/Card3'


const ProjectsPage = () => {
  return (
    <>
    <div className = "projects">
      <h1 className = "centered" id = "primary">Projects</h1>
        <div className = "centered"><Card1/><Card2/><Card3/></div>
    </div>
    </>
  )
}

export default ProjectsPage