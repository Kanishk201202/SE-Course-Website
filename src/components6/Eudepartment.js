import React from 'react'
import Navigationbar from '../components/Navigationbar'

export default function Eudepartment() {
  return (
    <>
    {/*Navigation bar for navigating*/}
    <Navigationbar/>
    <br/>
    <h2>EU Department</h2>
    <br/>
    {/*table for eu department members*/}
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Designation</th>
          <th scope="col">Contact</th>
          <th scope="col">Email</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Chowdary P.P</td>
          <td>Senior Project Advisor</td>
          <td>ppc@iittp.ac.in</td>
          <td>085772503601</td>
          <td>Engineering Unit Building, Permanent campus</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Raja V.S.D</td>
          <td>Project Advisor</td>
          <td>rajavsd@iittp.ac.in</td>
          <td>085772503603</td>
          <td>Transit Campus</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Chaitanya Subba Reddy Tetala</td>
          <td>Junior Engineer - Electrical</td>
          <td>csrt@iittp.ac.in</td>
          <td>085772503604</td>
          <td>Engineering Unit Building, Permanent campus</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>G.Ravi</td>
          <td>Junior Technician</td>
          <td>ravi@iittp.ac.in</td>
          <td>085772503603</td>
          <td>Maintenance room, Temporary campus</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Muthu Karuppasamy S</td>
          <td>Project Officer</td>
          <td>muthu@iittp.ac.in</td>
          <td></td>
          <td>Maintenance office, Transit campus, Yerpedu</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>R Niranjan</td>
          <td>Senior Technician</td>
          <td>niranjan@iittp.ac.in</td>
          <td></td>
          <td>Engineering Unit Building, Permanent campus</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Senthamil Selvan A</td>
          <td>Junior Engineer - Civil</td>
          <td>selvan@iittp.ac.in</td>
          <td>085772503602</td>
          <td>Engineering Unit Building, Permanent campus</td>
        </tr>
      </tbody>
</table>
</>
  )
}