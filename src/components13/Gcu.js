import React from 'react'
import { a, NavLink } from 'react-router-dom';
export default function GCU() {
  return (
    <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/booksession">Book Session</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/registerissue">Register Issue</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/administartiveinterface">AdministrativeInterface</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/councellorinterface">Councellor Interface</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/registeredstudents">Registered Students</NavLink>
            </li>
        </ul>
    </>
  )
}