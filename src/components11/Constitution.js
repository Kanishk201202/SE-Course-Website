import React from 'react'
import { a, NavLink } from 'react-router-dom';
import img1 from './images/2.jpg';
export default function Constitution() {
  return (
    <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/studentconstitution">Student Constitution</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/ammendconstitution">Ammend Constitution</NavLink>
            </li>
        </ul>
        <div classNameName="container my-3 w-75">
        <h1>Constitution</h1>
        Write about constitution.
        
        <br/>
        <img src={img1} className="img-fluid shadow-4" alt="..."/>
    </div>
    </>
  )
}