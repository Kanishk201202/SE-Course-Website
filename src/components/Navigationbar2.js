import React from 'react'
import { a, NavLink } from 'react-router-dom';

export default function Navigationbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Navigation bar using bootstrap */}
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home2">Home</NavLink>
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
                        <li><NavLink className="dropdown-item" to="/hosteldetailsg">Hostel Details</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/hosteladmissiong">Hostel Admission</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/roomallotmentg">Room Allotment</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/messregistrationg">Mess Registration</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/hostelqueryg">Hostel and Mess Queries</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/medicalserviceg">Medical Service</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Student Affairs
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" to="/technicalactivitiesg">Technical Activities</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/studentg">Student Clubs</NavLink></li>
                    </ul>
                </li>
            </ul>
            
          </div>
        </div>
      </nav>
  )
}