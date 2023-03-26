import React, {useState} from "react"

const About = () => {
    const [activeTab, SetActiveTab] = useState(["active","",""])


  function openTab(tabname) {
    if (tabname === "interests") {
        SetActiveTab(["active", "",""])
    } else if (tabname === "experience") {
        SetActiveTab(["", "active",""])
    }else if (tabname === "education") {
        SetActiveTab(["", "","active"])
    }
  }
  
  return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="assets/images/profile.jpeg" alt="Vefa Ayaz" id="user" data-aos="fade-up"/>
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p data-aos="fade-up">
                Focused and enthusiastic developer with a keen interest in
                software development. By comprehensive exposure to the
                underlying concepts and applying them vividly to various
                projects, my love for these domains came into being. I am a
                passionate individual who thrives to build and apply algorithms
                to solve real-world software problems.
              </p>
              <div className="tab-titles" data-aos="fade-up">
                <p
                  className={`tab-links ${activeTab[0]}-link`}
                  onClick={()=> openTab("interests")}
                >
                  Interests
                </p>
                <p className={`tab-links ${activeTab[1]}-link`} onClick={()=>openTab("experience")}>
                  Experience
                </p>
                <p className={`tab-links ${activeTab[2]}-link`} onClick={()=>openTab("education")}>
                  Education
                </p>
              </div>
              <div className={`tab-contents ${activeTab[0]}-tab`} id="interests" data-aos="fade-up">
                <ul>
                  <li>
                    <span>Web Development</span>
                    <br />
                    App Development
                  </li>
                  <li>
                    <span>App Development</span>
                    <br />
                    Building Android/iOS apps
                  </li>
                  <li>
                    <span>UI/UX</span>
                    <br />
                    Designing Web/App interfaces
                  </li>
                </ul>
              </div>
              <div className={`tab-contents ${activeTab[1]}-tab`} id="experience">
                <ul>
                  <li>
                    <span>ALKU</span>
                    <br />
                    2021 - Current(Student)
                  </li>
                  <li>
                    <span></span>
                    <br />
                  </li>
                  <li>
                    <span></span>
                    <br />
                  </li>
                </ul>
              </div>
              <div className={`tab-contents ${activeTab[2]}-tab`} id="education">
                <ul>
                  <li>
                    <span>2021 - Current</span>
                    <br />
                    Student of ALKU
                  </li>
                  <li>
                    <span></span>
                    <br />
                  </li>
                  <li>
                    <span></span>
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default About;
