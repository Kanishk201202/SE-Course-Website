import React from 'react';
import Navigationbar from '../components/Navigationbar';

export default function Ammendconstitution() {

    
    return (
    <>
    {/*Navigation bar for navigating*/}
        <Navigationbar/>
        <br/>
        <h2>Form for Ammending Constitution</h2>
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
        {/*add your suggestion below*/}
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Add your Suggestion</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        {/*click submit button to submit data*/}
    <button type="button" className="btn btn-primary">Submit</button>
    </>
  )
}
