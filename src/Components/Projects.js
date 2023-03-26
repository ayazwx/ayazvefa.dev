import React from "react"

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="projects-list">
          <div className="project" data-aos="fade-up">
            <img src="assets/images/work-1.png" alt="javascript projects" />
            <div className="layer">
              <h3>JavaScript Projects</h3>
              <p>I built these apps with html, CSS and JavaScript</p>
              <a href="https://ayazwx.github.io/js-projects/">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up">
            <img
              src="assets/images/netflix.gif"
              alt="netflix"
              className="netflix"
            />
            <div className="layer">
              <h3>Netflix clone with React.js</h3>
              <p>I built this app with React.js</p>
              <a href="https://github.com/ayazwx/Netflix-Clone-With-ReactJs">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up">
            <img src="assets/images/weather-app.png" alt="weather app" />
            <div className="layer">
              <h3>Weather app</h3>
              <p>I built this app with React.js</p>
              <a href="https://react-weather-be995.web.app/">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <a href="https://github.com/ayazwx" className="learn-more" data-aos="fade-up">
          Learn more <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    {/* <!-- <a href="#">Learn more<i className="fas fa-external-link-alt" style="font-size: 10px; margin-left: 5px;"></i></a> --> */}
    </div>
  )
};

export default Projects;
