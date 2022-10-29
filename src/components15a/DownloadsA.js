import React from 'react'
import { a, NavLink } from 'react-router-dom';
import Navigationbar1 from '../components/Navigationbar1';
import img1 from './images/2020.jpg';
export default function DownloadsA() {
  return (
    <>
     {/*Navigation bar for navigating*/}
        <Navigationbar1/>
        <br/>
         {/*different tabs*/}
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/requesttechnicala">Approval request for Technical Project</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/requestparticipationa">Request for Partcipation</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/requestbudgeta">Request for budget</NavLink>
            </li>
        </ul>
        <br/>
        <img src={img1} className="img-fluid shadow-4" alt="..."/>
    </>
  )
}