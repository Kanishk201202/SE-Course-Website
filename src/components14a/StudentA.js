import React from 'react'
import { a, NavLink } from 'react-router-dom';
import Navigationbar1 from '../components/Navigationbar1';
import img1 from './images/10001.jpg';
import img2 from './images/10002.png';
import img3 from './images/10003.jpg';
import img4 from './images/10004.jpg';
import img5 from './images/10005.jpg';
import img6 from './images/10006.jpg';
export default function StudentA() {
  return (
    <>
    {/*Navigation bar for navigating*/}
        <Navigationbar1/>
        <br/>
         {/*different tabs*/}
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/studentclubsa">Student Clubs</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/studentclubapplicationa">Student Club Application</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/studentclubsubscriptiona">Student Club Subscription</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/electionregistrationa">Registered students for election</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/electionresulta">Election Result</NavLink>
            </li>
        </ul>
        {/*about student clubs*/}
        <h1>Student Clubs</h1>
        Some pictures of different events of Student Clubs.
        <br/>
        <br/>
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
                {/*images related to student clubs*/}
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