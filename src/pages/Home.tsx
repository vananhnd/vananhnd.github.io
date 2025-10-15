import ImpressiveWorks from "../components/ImpressiveWorks.tsx";
import TechStack from "../components/TechStack.tsx";
import Footer from "../components/Footer";
import React from "react";
import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <ImpressiveWorks/>
      <TechStack/>
      <Footer/>
    </React.Fragment>
  )
}