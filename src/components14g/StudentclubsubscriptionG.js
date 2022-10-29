import React from 'react';
import Navigationbar2 from '../components/Navigationbar2';

export default function StudentclubsubscriptionG() {
  return (
    <>
     {/*Navigation bar for navigating*/}
        <Navigationbar2/>
        <br/>
        <h2>Student Club Subscription</h2>
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
        <div>
             {/*select your club*/}
        <h6>Clubs</h6>
        
        <select className="form-select w-25" aria-label="Default select example" >
        <option selected>select</option>
            <option value="1">Actomania</option>
            <option value="2">Artista</option>
            <option value="3">Aranya</option>
            <option value="4">Chaturanga</option>
            <option value="5">PFC</option>
            <option value="6">Literary</option>
            <option value="7">Sahayog</option>
            <option value="8">Sargam</option>
            <option value="9">XCITE</option>
           
        </select>
        </div>
        <br/>
         {/*click submit button to submit data*/}
        <button type="button" class="btn btn-primary">Submit</button>
    </>
  )
}
