import React from 'react'
import { a, NavLink } from 'react-router-dom';
import Navigationbar from '../components/Navigationbar';
import img1 from './images/4545.png';
export default function Gcu() {
  return (
    <>
     {/*Navigation bar for navigating*/}
        <Navigationbar/>
        <br/>
         {/*different tabs*/}
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/booksession">Book Session</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/registerissue">Register Issue</NavLink>
            </li>
        </ul>

        <br/>
         {/*about GCU*/}
        <h1>About Us</h1>
        The GCU team aids students with one-on-one counselling. The students can approach any of the GCU members to share their problems and seek advice. GCU functions along with other Counselling services on campus in a similar context of personal counselling to students as need arises on an individual basis. Organising events wherein students can share their thoughts, interact with the faculties and other students is also taken care of by the GCU.
        <br/>
        <br/>
        <img src={img1} className="img-fluid shadow-4" alt="..."/>
    </>
  )
}