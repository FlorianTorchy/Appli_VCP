import React from "react";
// Import de logo.svg dans la variable logo
import logo from "../Logo_EGIS.png";

function Header(props) {
  return (
    <header id="index-header" className="container-fluid bg-dark">
        <div className="row">
          <div>
            <img
              src={logo}
              alt=""
              width="auto"
              height="45"
            />
            </div>
        </div>
  </header>
  );
}

export default Header;
