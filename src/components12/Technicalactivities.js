import React from 'react'
import { a, NavLink } from 'react-router-dom';
import Navigationbar from '../components/Navigationbar';
import img1 from './images/101.jpg';
import img2 from './images/102.jpg';
import img3 from './images/103.jpg';
import img4 from './images/104.jpg';
import img5 from './images/105.jpg';
import img6 from './images/106.jpg';
export default function Technicalactivities() {
  return (
    <>
    {/*Navigation bar for navigating*/}
        <Navigationbar/>
        <br/>
        {/*different tabs*/}
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
    {/*about technical activities*/}

        <h1>Technical Activities</h1>
        Various number of Technical Activities have taken place in our college in the past and also many such events and activities are going to happen in future also.

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <br/>
            {/*technical activities images*/}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-75" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-75" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-75" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src={img4} className="d-block w-75" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src={img5} className="d-block w-75" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src={img6} className="d-block w-75" alt=""/>
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
    </>
  )
}