import React from 'react'
import { a, NavLink } from 'react-router-dom';
export default function Guestlogin() {
  return (
    <>
    {/* Dialog box for Guest Sign In */}
       <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Guest Sign In</h3>
          {/* Enter your Email here */}
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
          {/* Click the Submit Button after filling up the information */}
          <div className="d-grid gap-2 mt-3">
            <NavLink to="/home2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}
