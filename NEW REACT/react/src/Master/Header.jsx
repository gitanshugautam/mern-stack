import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="header_section">
    <div className="container">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=""> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ">
            <li className="nav-item active">
              <a className="nav-link" href="">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {" "}
                Models{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {" "}
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-brand" href="">
                {" "}
                <span>
                  <span>OB</span>erlo
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {" "}
                Price
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {" "}
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="">
                Contact{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
    </div>
  )
}

export default Header
