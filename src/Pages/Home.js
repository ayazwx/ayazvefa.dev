import React from "react";
import Header from "../Components/Header";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Me from "../Components/Me";

const Home = () => {
  return (
    <div>
      <Header  links={"#"}/>
      <Me />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
