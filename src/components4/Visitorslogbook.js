import React from 'react';

export default function Visitorslogbook() {

    
    return (
    <>
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Name</label>
            </div>
            <div className="col-auto">
                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
            </div>
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                    Must be 8-20 characters long.
                </span>
            </div>
        </div>

        <br/>
    
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Contact Number</label>
            </div>
            <div className="col-auto">
                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
            </div>
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                    Enter your 10 digit mobile number.
                </span>
            </div>
        </div>
        <br/>
        <div>
          <h6>Date of entry:</h6>
          <div className="input-group mb-3 w-25">
          <span className="input-group-text" id="basic-addon1">Date</span>
          <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>
        <br/>
        <div>
          <h6>Time of entry:</h6>
          <div className="input-group mb-3 w-25">
          <span className="input-group-text" id="basic-addon1">Time</span>
          <input type="time" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>
        <br/>
        <div>
          <h6>Date of exit:</h6>
          <div className="input-group mb-3 w-25">
          <span className="input-group-text" id="basic-addon1">Date</span>
          <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>
        <br/>
        <div>
          <h6>Time of exit:</h6>
          <div className="input-group mb-3 w-25">
          <span className="input-group-text" id="basic-addon1">Time</span>
          <input type="time" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>
        <br/>
        <div className="mb-3">
            <label for="formFile" className="form-label">Add your signature</label>
            <input className="form-control" type="file" id="formFile"/>
        </div>
        <br/>
        <button type="button" className="btn btn-primary">Submit</button>
    </>
  )
}
