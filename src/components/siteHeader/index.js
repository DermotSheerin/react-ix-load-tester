import React from "react";
import { Link } from "react-router-dom";
//import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";


const SiteHeader = () => {


  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          IX Chat Generator
        </Link>
      </nav>
      
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link text-white" to="/chatParameters">
              Chat Parameters
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              ChatStats
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/resourceChart">
              Resource Chart
            </Link>
          </li>    
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;