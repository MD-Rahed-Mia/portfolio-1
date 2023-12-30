
import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import AboutMe from './component/AboutMe/AboutMe'
import Services from './component/Services/Services'
import Whyme from './component/Whyme/Whyme'
import RecentWork from './component/RecentWork/RecentWork'

function App() {

  return (
    <>

      <div className="body">

        <Navbar />
        <Hero />
        <AboutMe />
        <Services />
      </div>

      <Whyme />
      <RecentWork />
    </>
  )
}

export default App
