import React from 'react'
import { a, NavLink } from 'react-router-dom';
export default function Student() {
  return (
    <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/studentclubs">Student Clubs</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/studentclubapplication">Student Club Application</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/studentclubsubscription">Student Club Subscription</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/electionregistration">Nomination for Election</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/electionwithdrawl">Withdrawl from election</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/castevote">Caste Vote</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/electionresult">Election Result</NavLink>
            </li>
        </ul>
    </>
  )
}