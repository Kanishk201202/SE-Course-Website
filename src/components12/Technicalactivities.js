import React from 'react'
import { a, NavLink } from 'react-router-dom';
export default function Technicalactivities() {
  return (
    <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/technicalclubs">Technical Clubs</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/technicalevents">Technical Events</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/workshopregistration">Workshop Registration</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/aboutevents">About Events</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/feedback">Feedback</NavLink>
            </li>
        </ul>
    </>
  )
}