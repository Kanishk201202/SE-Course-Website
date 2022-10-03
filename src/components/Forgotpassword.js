import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Forgotpassword() {
  return (
   <>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm New Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <NavLink to="/">
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
