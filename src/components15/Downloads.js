import React from 'react'
import { a, NavLink } from 'react-router-dom';
import Navigationbar from '../components/Navigationbar';
import img1 from './images/2020.jpg';
export default function Downloads() {
  return (
    <>
     {/*Navigation bar for navigating*/}
        <Navigationbar/>
        <br/>
        {/*different tabs*/}
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
        <br/>
        <img src={img1} className="img-fluid shadow-4" alt="..."/>
    </>
  )
}