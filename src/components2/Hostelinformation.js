import React from 'react'
import Navigationbar from '../components/Navigationbar';
export default function Hostelinformation() {
  return (
    <>
    {/*Navigation bar for navigating*/}
    <Navigationbar/>
    <br/>
    <h2>Information about hostel</h2>
    <br/>
    {/*Contact information for hostel*/}
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>For more details check in Hostel Details section of the website.</strong> 
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div className="card text-bg-dark mb-3" style={{"maxWidth": "18rem"}}>
      <div className="card-header">Contact </div>
      <div className="card-body">
        <h5 className="card-title">Email : home@iittp.ac.in
Phone : 0877 250 3898</h5>
        <p className="card-text">Hostel and Mess Establishment
Hostel C Basement
Indian Institute of Technology Tirupati
Yerpedu – Venkatagiri Road, Yerpedu Post,
Tirupati District, A.P - 517619</p>
      </div>
    </div>
    </>
  )
}
