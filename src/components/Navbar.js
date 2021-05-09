import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        {/* Navigation */}
        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target"
          id="ftco-navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              Binh<span>@</span>
            </a>
            <button
              className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav nav ml-auto">
                <li className="nav-item">
                  <a href="index.html" className="nav-link">
                    <span>Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    <span>About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link actives">
                    <span>Lab 1</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="lab2.html" className="nav-link ">
                    <span>Lab 2</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="lab3.html" className="nav-link">
                    <span>Lab 3</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="lab4.html" className="nav-link">
                    <span>Lab 4</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="result.html" className="nav-link">
                    <span>Result</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
