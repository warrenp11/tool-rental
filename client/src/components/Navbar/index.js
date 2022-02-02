import React from "react";
import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";

function Navbar() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
            <div class="container">

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                 
                  <li className="nav-item">
                    <a class="nav-link" href="/contact">
                      Contact
                    </a>
                  </li>

                </ul>
                <a class="navbar-brand fw-bolder fs-4 mx-auto" href="/home">
                  Tool Rentals
                </a>
                <NavLink to="/" onClick={() => Auth.logout()} className="btn btn-outline-primary ms-auto px-4 rounded-pill">Logout</NavLink>
              </div>
            </div>
      );
    } else {
      return (
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
                    <a class="nav-link" href="/contact">
                      Contact
                    </a>
                  </li>

                </ul>
                <a class="navbar-brand fw-bolder fs-4 mx-auto" href="/">
                  Tool Rentals
                </a>
                <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">Login</NavLink>
                <NavLink to="/signup" className="btn btn-outline-primary ms-3 px-4 rounded-pill">Sign Up</NavLink>
              </div>
            </div>
      )
    }
  }

  return (
    <header className="flex-row px-1">
      <nav className="navbar navbar-expand-lg navbar-light">
        {showNavigation()}
      </nav>
    </header>
  )
}
export default Navbar;
