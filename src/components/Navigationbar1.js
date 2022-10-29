import React from 'react'
import { a, NavLink } from 'react-router-dom';
export default function Navigationbar1() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Navigation bar usig bootstrap */}
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home1">Home</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hostel Affairs
                    </NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/hosteldetailsa">Hostel Details</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/hosteladmissiona">Hostel Admission</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/hostellogbooka">Hostel Logbook</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/hostelquerya">Hostel and Mess Queries</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/medicalservicea">Medical Service</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Student Affairs
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" to="/constitutiona">Constitution</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/technicalactivitiesa">Technical Activities</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/gcua">GCU</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/studenta">Student Clubs and Elections</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/downloadsa">Downloads</NavLink></li>
                    </ul>
                </li>
            </ul>
            
          </div>
        </div>
      </nav>
  )
}
