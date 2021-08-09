import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import ProjectsSlider from '../ProjectsSlider/ProjectsSlider'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsSlider />
      <Services />
      <Footer />
    </>
  )
}

export default HomePage
