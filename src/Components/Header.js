import React, {useState, useRef, useEffect} from "react";

const Header = (links) => {
    const [navActive, setNavActive] = useState("none")
    const [menuRight, setMenuRight] = useState("-200px")
    const blur = useRef(null);
    
  const openMenu = () => {
    // sidemenu.style.right = "0";
    setMenuRight("0")
    setNavActive("block")
  }

  function closeMenu() {
    // sidemenu.style.right = "-200px";
    setMenuRight("-200px")
    setNavActive("none")
  }
  useEffect(() => {
    const element = blur.current;
    element.addEventListener('click', closeMenu);
    return () => {
      element.removeEventListener('click', closeMenu);
    };
  }, []);
  return (
      <div className="container" id="nav">
        <nav>
          <a href="./">
          <img
          src="assets/images/logo-ayaz.png"
          className="logo"
          alt="ayaz-logo"
        /></a>
          <ul id="side-menu" style={{right: menuRight}}>
            <li>
              <a href={`${links.links}header`}>Home</a>
            </li>
            <li>
              <a href={`${links.links}about`}>About</a>
            </li>
            <li>
              <a href={`${links.links}projects`}>Projects</a>
            </li>
            <li>
              <a href={`${links.links}skills`}>Skills</a>
            </li>
            <li>
              <a href={`${links.links}contact`}>Contact</a>
            </li>
            <i className="fas fa-times" onClick={()=>closeMenu()}></i>
          </ul>
          <i className="fas fa-bars" onClick={()=>openMenu()}></i>
          <div id="nav-blur" onClick={()=>closeMenu()} style={{display: `${navActive}`}} ref={blur}></div>
        </nav>
      </div>
  );
};

export default Header;
