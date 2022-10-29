import React from 'react'
import Navigationbar1 from '../components/Navigationbar1'

export default function BookappointmentA() {
  return (
    <>
    {/*Navigation bar for navigating*/}
        <Navigationbar1/>
        <br/>
        <h2>Form for Booking Appointment</h2>
        <br/>
         {/*enter your name*/}
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Name</label>
            </div>
            <div className="col-auto">
                <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
            </div>
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                    Must be 8-20 characters long.
                </span>
            </div>
        </div>

        <br/>
            {/*enter your email*/}
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4"/>
            </div>
        </form>
        <br/>
        {/*enter your contact number*/}
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Contact Number</label>
            </div>
            <div className="col-auto">
                <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
            </div>
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                    Enter your 10 digit mobile number.
                </span>
            </div>
        </div>
        <br/>
        {/*date*/}
        <div>
          <h6>Date of Appointment :</h6>
          <div className="input-group mb-3 w-25">
          <span className="input-group-text" id="basic-addon1">Date</span>
          <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>
        <div>
          <h6>Time of Appointment :</h6>
          <div className="input-group mb-3 w-25">
          <span className="input-group-text" id="basic-addon1">Time</span>
          <input type="time" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>
        <br/>
        {/*click submit button to submit data*/}
        <button type="button" class="btn btn-primary">Submit</button>
    </>
  )
}
