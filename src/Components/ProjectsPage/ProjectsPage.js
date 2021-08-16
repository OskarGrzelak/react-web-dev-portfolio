import React from 'react'
import Navbar from '../Navbar/Navbar'
import Project from './Project/Project'
import Footer from '../Footer/Footer'
import { projects } from './data'
import './ProjectsPage.css'

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <main className="projects">
        <h1 className="projects__heading">Projekty</h1>
        <ul className="projects__list">
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default ProjectsPage
