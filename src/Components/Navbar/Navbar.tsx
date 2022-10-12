import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar-style.css'

function Navbar() {
  return (
    <>
    <div className = "Navbar-main-wrapper">
    <div className="nav-section">
            <div className="container-fluid">
                <div className="row p-4">
                  <div className="col-md-12 d-flex">
                    <div className="col-md-3 nav-logo-section">
                      <img src="Images/icons/Asset 1.png" alt="" />
                    </div>
                    <div className="col-md-3 nav-content-section">
                      <NavLink to="/">Home</NavLink> 
                      <NavLink to="course">Course</NavLink>
                      <NavLink to="student">Student</NavLink>
                      </div>
                      <div className="col-md-6 nav-search-section">
                      <input type="text" className="nav-search-box"/>
                      </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Navbar