import React, {useState} from 'react'
import Navigationbar from '../components/Navigationbar'

export default function Studentregistration() {
    const [users, setUser] = useState({
        name:"",rollnumber:"",programme:"",gender:"",email:"",contactnumber:"",fromdate:"",todate:""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
    
        name = e.target.name;
        value = e.target.value;

        setUser({...users, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const{ name, rollnumber, programme, gender, email, contactnumber, fromdate, todate } = users;

        const res = await fetch("/rep", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({

                name, rollnumber, programme, gender, email, contactnumber, fromdate, todate
            
            })
        });

        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration Successful");
            console.log("Successfull Registration");
        }
    }
  return (
    <>
    {/*Navigation bar for navigating*/}
        <Navigationbar/>
        <br/>
        <h2>Form for Student Mess Registration</h2>
        <br/>
        {/*enter your name*/}
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Name</label>
            </div>
            <div className="col-auto">
                <input type="text" id="inputPassword6" className="form-control" name='name'
                value={users.name}
                onChange={handleInputs}
                aria-describedby="passwordHelpInline"/>
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
                <input type="text" id="inputPassword6" className="form-control" name='rollnumber'
                value={users.rollnumber}
                onChange={handleInputs}
                aria-describedby="passwordHelpInline"/>
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
        
        <select className="form-select w-25" name='programme'
        value={users.programme}
        onChange={handleInputs}
        aria-label="Default select example" >
            <option selected>select</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.tech</option>
            <option value="M.Sc">M.Sc</option>
            <option value="M.Sc Research">M.Sc Research</option>
            <option value="Ph.D">Ph.D</option>
        </select>
        </div>

        
        <br/>
        <div>
               {/*select your gender*/}
        <h6>Gender</h6>
        
        <select className="form-select w-25" name='gender'
        value={users.gender}
        onChange={handleInputs}
        aria-label="Default select example" >
            <option selected>select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
        </select>
        </div>
        <br/>
        {/*enter your email*/}
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" name='email'
                value={users.email}
                onChange={handleInputs}
                id="inputEmail4"/>
            </div>
        </form>
        <br/>
         {/*enter your contact number*/}
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Contact Number</label>
            </div>
            <div className="col-auto">
                <input type="text" id="inputPassword6" className="form-control" name='contactnumber'
                value={users.contactnumber}
                onChange={handleInputs}
                aria-describedby="passwordHelpInline"/>
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
          <input type="date" class="form-control" placeholder="Username" aria-label="Username" name='fromdate'
          value={users.fromdate}
          onChange={handleInputs}
          aria-describedby="basic-addon1"/>
          </div>
        </div>

        <br/>
        <div>
          <h6>To:</h6>
          <div className="input-group mb-3 w-25">
          <span className="input-group-text" id="basic-addon1">Date</span>
          <input type="date" class="form-control" placeholder="Username" aria-label="Username" name='todate'
          value={users.todate}
          onChange={handleInputs}
          aria-describedby="basic-addon1"/>
          </div>
        </div>

        <br/>
         {/*click submit button to submit data*/}
        <button type="button" class="btn btn-primary" onClick={PostData}>Submit</button>

    </>
  )
}