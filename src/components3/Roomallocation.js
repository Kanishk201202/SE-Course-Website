import React from 'react'
import { a, NavLink } from 'react-router-dom';
import img1 from './images/10.jpg';
import img2 from './images/12.jpg';
import img3 from './images/16.jpeg';
import Navigationbar from '../components/Navigationbar';
export default function Roomallocation() {
  return (
    <>
    {/*Navigation bar for navigating*/}
    <Navigationbar/>
    <br/>
    {/*different tabs*/}
    <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/studentroom">Students room</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/changeroom">Change Room</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/vacatingroom">Vacating Room</NavLink>
            </li>
        </ul>
        <div classNameName="container my-3 w-75">
            {/*about hostel*/}
        <h1>Hostel Room Allocation</h1>
        The campus houses six multistorey hostel blocks, each with a capacity of approximately...students. Each hostel is equipped with the requisite infrastructure to ensure the comfort and safety of its residents. Rooms are equipped with basic furniture, including, chairs, study-tables, cots, almirahs, drying-stands and so on. Further, each hostel block has spacious common rooms where residents have access to TVs, indoor board games, newspapers and magazines for their recreation. All the hostels are provided with high-speed internet, washing machines, water coolers, rooftop solar system for hot water, RO purified drinking water, and other key facilities. Our dedicated housekeeping staff regularly clean hostel rooms and bathrooms. Additionally, each hostel block has round-the-clock-security to ensure the safety of its residents. The day-to-day management of hostels is taken care of by a committee consisting of student representatives and resident assistant warden, who work under the guidance of the council of wardens.
        {/*hostel images*/}
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