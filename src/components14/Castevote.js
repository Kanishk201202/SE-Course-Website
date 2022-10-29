import React from 'react'
import Navigationbar from '../components/Navigationbar'

export default function Castevote() {
  return (
    <>
      {/*Navigation bar for navigating*/}
        <Navigationbar/>
        <br/>
        <h2>Form for Casting Vote</h2>
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
        {/*enter candidate name */}
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Candidate Name</label>
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
        <div>
              {/*select position to vote*/}
    <h6>Position</h6>
    
    <select className="form-select w-25" aria-label="Default select example" >
        <option selected>select</option>
        <option value="1">Student General Secretary</option>
        <option value="2">Hostel Affairs Secretary</option>
        <option value="3">Student Affairs Secretary</option>
        <option value="4">Mess Secretary</option>
        <option value="5">Sports Secretary</option>
        <option value="6">CR - 1st Year</option>
        <option value="7">CR - 2nd Year</option>
        <option value="8">CR - 3rd Year</option>
        <option value="9">CR - 4th Year</option>
       
    </select>
    </div>
    <br/>
    <div>
        {/*select branch to vote*/}
    <h6>Branch</h6>
    
    <select className="form-select w-25" aria-label="Default select example" >
        <option selected>select</option>
        <option value="1">Chemical Engineering</option>
        <option value="2">Civil Engineering</option>
        <option value="3">Computer Science and Engineering</option>
        <option value="4">Electrical Engineering</option>
        <option value="5">Mechanical Engineering</option>
       
    </select>
    </div>
    <br/>
    {/*click submit button to submit data*/}
    <button type="button" class="btn btn-primary">Submit</button>
    </>
  )
}
