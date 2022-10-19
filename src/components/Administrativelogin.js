import React from 'react'
import { a, NavLink } from 'react-router-dom';
export default function Administrativelogin() {
  return (
    <>
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Administrative Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <NavLink to="/home1">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </NavLink>
          </div>
          <p className="forgot-password text-right mt-2">
           <NavLink to="/forgotpassword"> Forgot password?</NavLink>
          </p>
        </div>
      </form>
    </div>
    </>
  )
}
