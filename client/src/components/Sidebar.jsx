import React, { useState } from "react";
import photo from "../photop.jpg";

function Sidebar(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    // création du container, de la div Row et
    
      <div>
          <div id="profil" className="d-flex flex-column align-items-center">
            <div
              id="photoProfil"
              className="d-flex flex-column align-items-center"
            >
              <img src={photo} alt="brra" />
              <span className="nomUser">Torchy Florian</span>
            </div>
          </div>
          <div id="navbarLinks" className="d-flex flex-column align-items-center"
          >
            <ul>
              
              <li onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} 
                  data-tooltip="Page computer">
                <a
                  href="/LoginPage"
                  className="d-flex align-items-center text-white text-decoration-none"
                >
                  <i className="bx bx-laptop"></i>

                  <span className="fs-5 d-none d-sm-inline">Computer</span>
                </a>
                
              </li>
              
              <li onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} 
                  data-tooltip="Page monitor"
                  >
                <a
                  href="/Ecran"
                  className="d-flex align-items-center  text-white text-decoration-none"
                >
                  <i className="bx bx-desktop"></i>
                  <span className="fs-5 d-none d-sm-inline">Monitor</span>
                </a>
              </li>
              <li onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} 
                  data-tooltip="Non disponible pour le moment">
                <a
                  href="/"
                  className="d-flex align-items-center mb-md-0 text-white text-decoration-none"
                >
                  <i className="bx bxs-key"></i>
                  <span className="fs-5 d-none d-sm-inline">Software</span>
                </a>
              </li>
            </ul>
         </div>
       </div>
  );
}

export default Sidebar;
