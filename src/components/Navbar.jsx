import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import '../css/navbar.css'




const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/" >Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link" to="/" >Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/Listado" >Listado</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>


  );
};

export default Navbar;