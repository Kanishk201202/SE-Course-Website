import React from 'react'
import Navigationbar2 from '../components/Navigationbar2'

export default function FeedbackG() {
  return (
    <>
    {/*Navigation bar for navigating*/}
        <Navigationbar2/>
        <br/>
        <h2>Feedback Form</h2>
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
        {/*enter your contact number*/}
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Contact Number</label>
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
        {/*enter your feedback*/}
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Your Feedback</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <br/>
         {/*click submit button to submit data*/}
        <button type="button" class="btn btn-primary">Submit</button>
    </>
  )
}
