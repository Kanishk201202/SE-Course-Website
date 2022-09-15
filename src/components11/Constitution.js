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
        The structure of the students’ constitution is expressed in the formation of Student Affairs Council
        (SAC). The SAC shall be the apex policy-making student representative body. The policies shall be
        based upon the experiences, demands and aspirations of the General Student Body (GSB). The SAC
        is also accountable to execute the policies. All registered students of the Institute who pay the
        Gymkhana dues shall be members of the GSB.
        <br/>
        <br/>
        <h5>The SAC shall remain responsible to the General Student Body.</h5>
        <br/>
        Objectives of the SAC:
        <br/>
        1. To foster and develop all student activities in the Institute.
        <br/>
        2. To Identify student issues and promote discussion on them.
        <br/>
        3. To develop a well-informed, articulate and participative student community life, and to increase social awareness.
        <br/>
        4. To function as the office for all election/nominations of students for gymkhana activities.
        <br/>
        5. To offer clerical and office support for all recognized student activities.
        <br/>
        <br/>
        The Constitution has been devised keeping in mind the needs and resources for the next 5 years.
        The SAC must form a committee dedicated for revising the Constitution as per the requirements
        then.
        <br/>
        <img src={img1} className="img-fluid shadow-4" alt="..."/>
    </div>
    </>
  )
}