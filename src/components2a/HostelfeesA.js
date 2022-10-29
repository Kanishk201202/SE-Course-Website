import React from 'react'
import Navigationbar1 from '../components/Navigationbar1';
export default function HostelfeesA() {
  return (
    <>
    {/*Navigation bar for navigating*/}
    <Navigationbar1/>
    <br/>
    <h2>About Hostel Fees</h2>
    <br/>
    {/*Accordion for hostel fees for different users*/}
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Student Hostel fees
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            Hostel Fees for Students per day = Rs 150
            <br/>
            Other fees(including Gym, Electricity bill, etc.) = Rs 25 
            <br/>
            Number of days in Hostel = N 
            <br/>
            Total fees to be paid = 175*N
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Guest Hostel fees
          </button>
        </h2>
      <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
        <div class="accordion-body">
            Hostel Fees for Guest per day = Rs 500
            <br/>
            Other fees(including Gym, Electricity bill, etc.) = Rs 25 
            <br/>
            Number of days in Hostel = N 
            <br/>
            Total fees to be paid = 525*N
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
