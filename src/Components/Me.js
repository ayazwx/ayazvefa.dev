import React from "react";
import Typed from 'typed.js';

const Me = () => {

    React.useEffect(() => {
      const typed = new Typed('.typing', {
        strings: ["Software Developer", "Programmer", "a passionate React Developer"],
        loop: true,
        typeSpeed: 65,
        backSpeed: 65
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  return (
    <div id="header">
      <div className="container">
        <div className="header-text" data-aos="fade-up">
          <p>Front-End Developer</p>
          <h1>
            Hi! I'm <span>Vefa Ayaz</span>
          </h1>
          <h2 style={{ color: "#fff" }}>
            I'm <span className="typing" style={{ color: "#12D640" }}></span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Me;
