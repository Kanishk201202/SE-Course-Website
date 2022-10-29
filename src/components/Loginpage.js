import React from 'react'
import { a, NavLink } from 'react-router-dom';

export default function Loginpage() {
    return(
        <>
           {/*Login for different users */}
            <div className="Auth-form-container">
                <form className="Auth-form">
                <div className="Auth-form-content">
                <h1>IIT TIRUPATI</h1>
                <div className="list-group">
                <NavLink to="/studentlogin" className="list-group-item list-group-item-action " aria-current="true">
                    Student Login
                </NavLink>
                <NavLink to="/administrativelogin" className="list-group-item list-group-item-action">Administrative Login</NavLink>
                    <NavLink to="guestlogin" className="list-group-item list-group-item-action">Guest Login</NavLink>
            </div>
                </div>
            </form>
        </div>
        </>
    )
}