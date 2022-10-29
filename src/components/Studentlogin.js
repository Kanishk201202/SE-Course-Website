import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Studentlogin() {
  return (
    <>
      {/* Dialog box for Student sign in */}
       <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Student Sign In</h3>
          {/* Enter your name here */}
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          {/* Enter your password here */}
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          {/* Click the button to submit your information */}
          <div className="d-grid gap-2 mt-3">
            <NavLink to="/home">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </NavLink>
          </div>
          <p className="forgot-password text-right mt-2">
             <NavLink to="/forgotpassword">Forgot password ?</NavLink>
          </p>
        </div>
      </form>
    </div>
    </>
  )
}
