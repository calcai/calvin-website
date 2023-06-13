import React from 'react'
import './index.css'
import MainPage from './pages/MainPage'
import MenuBar from './components/MenuBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <BrowserRouter>
      <MenuBar/>
      <div className = "content">
        <Routes>
          <Route path = "/" element = {<MainPage/>}/>
          <Route path = "/about" element = {<AboutPage/>}/>
          <Route path = "/projects" element = {<ProjectsPage/>}/>
          <Route path = "/contact" element = {<ContactPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
 
export default App