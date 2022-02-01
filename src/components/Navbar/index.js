import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/tools">
                  Tools
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              
            </ul>
            <a class="navbar-brand fw-bolder fs-4 mx-auto" href="#">
            Navbar
          </a>
            <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">Login</NavLink>
            <NavLink to="/signup" className="btn btn-outline-primary ms-3 px-4 rounded-pill">Sign Up</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
