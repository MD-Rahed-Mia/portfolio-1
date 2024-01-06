import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutMe from "./component/AboutMe";
import Services from "./component/Services";
import Whyme from "./component/Whyme";
import RecentWork from "./component/RecentWork";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import ToBottom from "./component/ToBottom";
import Skills from "./component/skills";

function App() {
  return (
    <>
      <Navbar />

      <div className="body">
        <Hero />
        <AboutMe />
        <Services />
      </div>


      <Skills />

      <Whyme />

      <RecentWork />

      <Contact />

      <Footer />

      <ToBottom />
    </>
  );
}

export default App;
