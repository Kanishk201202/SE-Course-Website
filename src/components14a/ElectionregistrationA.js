import React from 'react'
import Navigationbar1 from '../components/Navigationbar1'

export default function ElectionregistrationA() {
  return (
    <>
      {/*Navigation bar for navigating*/}
    <Navigationbar1/>
    <br/>
    <h2>Students registered for Election</h2>
    <br/>
      {/*table for registered students for election*/}
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Candidate Name</th>
          <th scope="col">Position</th>
          <th scope="col">Registration for election</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Kanishk Kumar</td>
          <td>Student General Secretary</td>
          <td>Registered</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Aditya Pandey</td>
          <td>Sports Secretary</td>
          <td>Registered</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Canya Forger</td>
          <td>Mess Secretary</td>
          <td>Registered</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Anurag Kumar</td>
          <td>Mess Secretary</td>
          <td>Registered</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Anya Forger</td>
          <td>Student General Secretary</td>
          <td>Registered</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Banya Forger</td>
          <td>Sports Secretary</td>
          <td>Registered</td>
        </tr>
       
      </tbody>
</table>
</>
  )
}
