
import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import AboutMe from './component/AboutMe/AboutMe'

function App() {

  return (
    <>

    <div className="body">

      <Navbar />
      <Hero />
      <AboutMe />

    </div>

    </>
  )
}

export default App
