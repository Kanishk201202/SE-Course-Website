import React from 'react'
import { a, NavLink } from 'react-router-dom';
import Navigationbar from '../components/Navigationbar';
import img1 from './images/31.jpeg';
import img2 from './images/32.jpeg';
import img3 from './images/33.jpeg';
import img4 from './images/34.jpeg';
import img5 from './images/35.jpeg';
import img6 from './images/36.jpeg';
export default function Medical() {
    
  return (
    <>
    {/*Navigation bar for navigating*/}
        <Navigationbar/>
        <br/>
          {/*different tabs*/}
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/bookappointment">Book Appointment</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/medicalhistory">Medical History</NavLink>
            </li>
        </ul>
        <div classNameName="container my-3 w-75">
              {/*about medical service of hostel*/}
        <h1>Medical Service</h1>
        The transit campus houses a health center with 2 doctors and 5 nurses on call. The facility is fully equipped with standard medicines (including anti-venom drugs, anti-rabies vaccines etc.) equipments like defibrillators, monitors, crash carts and a 24/7 ambulance, in case of emergencies.
         {/*images sof medical facility*/}
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
    </div>
    </>
  )
}
