import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import AboutMe from "./component/AboutMe/AboutMe";
import Services from "./component/Services/Services";
import Whyme from "./component/Whyme/Whyme";
import RecentWork from "./component/RecentWork/RecentWork";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import ToBottom from "./component/To Bottom/ToBottom";

function App() {
  return (
    <>
      <Navbar />

      <div className="body">
        <Hero />
        <AboutMe />
        <Services />
      </div>

      <Whyme />

      <RecentWork />

      <Contact />

      <Footer />

      <ToBottom />
    </>
  );
}

export default App;
