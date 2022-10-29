import React from 'react'
import Navigationbar1 from '../components/Navigationbar1'

export default function CcdepartmentA() {
  return (
  <>
   {/*Navigation bar for navigating*/}
    <Navigationbar1/>
    <br/>
    <h2>Computer Centre Department</h2>
    <br/>
    {/*About Computer centre*/}
    <h>Computer Centre (CC) is responsible for maintaining the software developments, central computing and networking infrastructure of IIT Tirupati. The computing facility primarily involves PC and workstation labs running both general and special-purpose software which used for holding lab classNamees of different departments. Networking services provided by CC includes wired and wireless internet access spanning the entire institute, a centralized mail messaging service, and several other ancillary services.

    </h>
    <br/>
    <br/>
    <div className="card text-bg-dark mb-3" style={{"maxWidth": "18rem"}}>
      <div className="card-header">Contact</div>
      <div className="card-body">
        <h5 className="card-title">Dr. Venkata Ramana Badarla
HOD - Department of Computer Science & Engineering</h5>
        <p className="card-text">Email : head_cc@iittp.ac.in
        <br/>
        Phone : 0877 2503212</p>
      </div>
    </div>
  </>
  )
}