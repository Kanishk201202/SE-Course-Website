import React from 'react'
import { a, NavLink } from 'react-router-dom';
export default function Messregistration() {
  return (
    <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/requesttechnical">Approval request for Technical Project</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/requestparticipation">Request for Partcipation</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/requestbudget">Request for budget</NavLink>
            </li>
        </ul>
    </>
  )
}