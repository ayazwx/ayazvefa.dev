import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Home from './Pages/Home'
import ErrorPage from "./Pages/404";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Me from "./Components/Me";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
        AOS.init({
          offset: 50,
          duration: 1000,
      });
      }, [])
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/header" element={<div><Header links={"/"}/><Me /><Footer /></div>} />
        <Route exact path="/me" element={<div><Header links={"/"}/><Me /><Footer /></div>} />
        <Route exact path="/About" element={<div><Header  links={"/"}/> <About /> <Footer /></div>} />
        <Route exact path="/projects" element={<div><Header  links={"/"}/> <Projects /> <Footer /></div>} />
        <Route exact path="/skills" element={<div><Header  links={"/"}/> <Skills /> <Footer /></div>} />
        <Route exact path="/contact" element={<div><Header  links={"/"}/> <Contact /> <Footer /></div>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
