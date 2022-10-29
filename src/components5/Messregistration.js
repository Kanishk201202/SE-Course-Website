import React from 'react'
import { a, NavLink } from 'react-router-dom';
import Navigationbar from '../components/Navigationbar';
import img1 from './images/20.jpeg';
import img2 from './images/21.jpeg';
import img3 from './images/22.jpeg';
export default function Messregistration() {
  return (
    <>
    {/*Navigation bar for navigating*/}
        <Navigationbar/>
        <br/>
          {/*different tabs*/}
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/studentregistration">Student Registration</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/vacationregistration">Vacation Registration</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/messrebate">Mess Rebate</NavLink>
            </li>
        </ul>
        <div classNameName="container my-3 w-75">
            {/*about mess*/}
        <h1>Mess Registration</h1>
        The institute provides a common mess facility that is housed in a spacious and well-ventilated dining room. The dining room is equipped with large volume and low-speed fans as well as TVs for the diner’s convenience. Additionally, the mess facility is equipped with a hygienically maintained kitchen and a storeroom which includes cold storage for perishable items. The food menu is regularly managed by the student representatives to serve the food preferences of our diverse student community who come from different regions of the country. The mess is operated by a private caterer, who is selected through a competitive tendering process that is called by the Institute every one or two years depending on the caterer’s performance. The day to day activities of the mess are however supervised by the Mess Establishment along with the student representatives.
        {/*mess images*/}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
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