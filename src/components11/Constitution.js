import React from 'react'
import { a, NavLink } from 'react-router-dom';
import img1 from './images/2.png';
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
        
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            </div>
            <br/>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-75" alt=""/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    </>
  )
}