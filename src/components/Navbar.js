import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
          <div className="container-fluid text-success">
            <Link className="navbar-brand text-light " to="/"> News-Today </Link>
            <button className="navbar-toggler text-success bg-success text-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-light " aria-current="page" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/business">business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/entertainment">entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/health">health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/science">science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/sports">sports</Link>
                </li>
                
              </ul>
              
            </div>
          </div>
        </nav>
    </div>
  )
}
