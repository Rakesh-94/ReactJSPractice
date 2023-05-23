import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="Navbar">
      <nav className="Container d-flex flex-row" style={{backgroundColor :'#c29f67'}}>
              <Link className="nav-link" to="/" style={{color:"white"}}>
                Home
              </Link>
              <Link className="nav-link" to="/About" style={{color:"white"}}>
              About
              </Link>
              <Link className="nav-link" to="/Blog" style={{color:"white"}}>
              Blog
              </Link>
      </nav>
    </div>
  );
};

export default Nav;
