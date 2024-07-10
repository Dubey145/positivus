import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './pages/Hero'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import Process from './pages/Process'
import Team from './pages/Team'

function App() {

  return (
   <main>
    <Nav></Nav>
    <Hero></Hero>
    <Services></Services>
    <CaseStudies></CaseStudies>
    <Process></Process>
    <Team></Team>
    
    <div>testimonials</div>
    <div>contact us</div>
    <div>footer</div>

   </main>
  )
}

export default App
