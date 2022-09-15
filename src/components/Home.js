import React from 'react'
import { a, NavLink } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon} from 'mdb-react-ui-kit';
import img1 from './images/Login.jpg';
export default function Home() {
  return (
    <>
      
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <span className="h1 fw-bold mb-0">IIT Tirupati</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5"><NavLink className="text-muted" to="#!">Forgot password?</NavLink></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
        <img src={img1} className="img-fluid shadow-4" alt="Login image" style={{objectFit: 'cover', objectPosition: 'left'}}/>
            
        </MDBCol>

      </MDBRow>
    
    </>
    
  )
}