import React from 'react'
import Navigationbar from '../components/Navigationbar'

export default function Messrebate() {
  return (
    <>
    {/*Navigation bar for navigating*/}
        <Navigationbar/>
        <br/>
        <h2>Form for Mess Rebate</h2>
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
         {/*enter your roll number*/}
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Roll Number</label>
            </div>
            <div className="col-auto w-15">
                <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
            </div>
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                    Enter your college roll number.
                </span>
            </div>
        </div>

        <br/>
        <div>
            {/*select your programme*/}
        <h6>Programme</h6>
        
        <select className="form-select w-25" aria-label="Default select example" >
            <option selected>select</option>
            <option value="1">B.Tech</option>
            <option value="2">M.tech</option>
            <option value="3">M.Sc</option>
            <option value="4">M.Sc Research</option>
            <option value="5">Ph.D</option>
        </select>
        </div>

        
        <br/>
        <div>
            {/*select your gender*/}
        <h6>Gender</h6>
        
        <select className="form-select w-25" aria-label="Default select example" >
            <option selected>select</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Others</option>
        </select>
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
          <h6>From:</h6>
          <div className="input-group mb-3 w-25">
          <span className="input-group-text" id="basic-addon1">Date</span>
          <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>

        <br/>
        <div>
          <h6>To:</h6>
          <div className="input-group mb-3 w-25">
          <span className="input-group-text" id="basic-addon1">Date</span>
          <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>

        <br/>
        {/*click submit button to submit data*/}
        <button type="button" class="btn btn-primary">Submit</button>

    </>
  )
}
