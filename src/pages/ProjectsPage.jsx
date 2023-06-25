import React from 'react'
import Card1 from '../components/Projects/Card1'
import Card2 from '../components/Projects/Card2'
import Card3 from '../components/Projects/Card3'
import Card4 from '../components/Projects/Card4'

const ProjectsPage = () => {
  return (
    <>
    <div>
      <h1 className = "centered" id = "primary">Projects</h1>
        <div className = "centered"><Card1/><Card2/></div>
        <div className = "centered"><Card3/><Card4/></div>
    </div>
    </>
  )
}

export default ProjectsPage