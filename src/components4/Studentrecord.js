import React from 'react'
import Navigationbar from '../components/Navigationbar';
export default function Studentrecord() {
  return (
    <>
    {/*Navigation bar for navigating*/}
        <Navigationbar/>
        <br/>
        <h2>Form for Student Records</h2>
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
        {/*click submit button to submit data*/}
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Submit
        </button>

        {/*pulling data from database*/}
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Room Number</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Your Room Number is 008.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}