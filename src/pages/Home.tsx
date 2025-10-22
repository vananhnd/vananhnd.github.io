import {Projects} from "../components/Projects.tsx";
import TechStack from "../components/TechStack.tsx";
import Footer from "../components/Footer";
import React from "react";
import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <TechStack/>
      <Experience/>
      <Footer/>
    </React.Fragment>
  )
}