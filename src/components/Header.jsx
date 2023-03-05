import React, { Component } from "react";
import logo from '../img/wonted-logo.png'
const menutitle = [
  "Benefits",
  "Chapters",
  "Pricing",
  "Author",
  "Achievements",
  "Reviews",
  "Contact",
];

class MenuItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          {this.props.menutitle}
        </a>

      </li>

    );
  }
}

class Header extends Component {
  render() {
    return (
     <div className="header position-absolute mt-1">
       <div className="container p-4">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item" id="home-item">
                  <a className="nav-link active" id="home-link" aria-current="page" href="/">
                    Home<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 10 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z"></path></svg>
                  </a>

                </li>
                {menutitle.map((item) => (<MenuItem menutitle={item} />))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
     </div>
    );
  }
}

export default Header;