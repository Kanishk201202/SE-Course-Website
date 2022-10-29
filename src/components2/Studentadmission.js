import React, {useState} from 'react'
import Navigationbar from '../components/Navigationbar';
export default function Studentadmission() {
    const [user, setUser] = useState({
        name:"",rollnumber:"",programme:"",gender:"",email:"",contactnumber:""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const{ name, rollnumber, programme, gender, email, contactnumber } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({

                name, rollnumber, programme, gender, email, contactnumber
            
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
    {/*Navigation bar for navigating */}
        <Navigationbar/>
        <br/>
        <h2>Student Admission Form</h2>
        <br/>
        {/*Enter your name */}
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Name</label>
            </div>
            <div className="col-auto">
                <input type="text" name="name" id="inputPassword6" className="form-control" 
                value={user.name}
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
        {/*Enter your Roll Number */}
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Roll Number</label>
            </div>
            <div className="col-auto w-15">
                <input type="text" name='rollnumber' id="inputPassword6" className="form-control" 
                value={user.rollnumber}
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
            {/*select your programme */}
        <h6>Programme</h6>
        
        <select className="form-select w-25" name='programme'
        value={user.programme}
        onChange={handleInputs}
        aria-label="Default select example" >
            <option selected>select</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.tech">M.tech</option>
            <option value="M.Sc">M.Sc</option>
            <option value="M.Sc Research">M.Sc Research</option>
            <option value="Ph.D">Ph.D</option>
        </select>
        </div>

        
        <br/>
        <div>
            {/*select your gender */}
        <h6>Gender</h6>
        
        <select className="form-select w-25" name='gender' 
        value={user.gender}
        onChange={handleInputs}
        aria-label="Default select example" >
            <option selected>select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
        </select>
        </div>
        <br/>
        {/*Enter your Email */}
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" name='email' class="form-control"
                value={user.email}
                onChange={handleInputs}
                id="inputEmail4"/>
            </div>
        </form>
        <br/>
         {/*Enter your Contact Number */}
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Contact Number</label>
            </div>
            <div className="col-auto">
                <input type="text" name='contactnumber' id="inputPassword6" className="form-control" 
                value={user.contactnumber}
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
        {/*Button to submit data */}
        <button type="button" class="btn btn-primary" onClick={PostData}>Submit</button>

    </>
  )
}
