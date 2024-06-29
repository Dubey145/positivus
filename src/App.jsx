import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './pages/Hero'

function App() {

  return (
   <main>
    <Nav></Nav>
    <Hero></Hero>
    
    <div>services</div>
    <div>case studies</div>
    <div>working process</div>
    <div>team</div>
    <div>testimonials</div>
    <div>contact us</div>
    <div>footer</div>

   </main>
  )
}

export default App
