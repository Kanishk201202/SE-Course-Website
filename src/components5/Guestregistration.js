import React, {useState} from 'react';

export default function Guestregistartion() {
    const [users, setUser] = useState({
        name:"",gender:"",email:"",contactnumber:"",fromdate:"",todate:""
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

        const{ name, gender, email, contactnumber, fromdate, todate } = users;

        const res = await fetch("/re", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({

                name, gender, email, contactnumber, fromdate, todate
            
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
        <div>
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
        <button type="button" class="btn btn-primary" onClick={PostData}>Submit</button>
    </>
  )
}
