import React from 'react'
import Navigationbar1 from '../components/Navigationbar1'

export default function StudentclubapplicationA() {
  return (
    <>
      {/*Navigation bar for navigating*/}
       <Navigationbar1/>
       <br/>
       <h2>Studnet Club Applications</h2>
        <br/>
          {/* Table for registered students for student clubs */}
       <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Student Club Regsitration</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Anya</td>
          <td>4444444441</td>
          <td>Chaturanga</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Banya</td>
          <td>4444444442</td>
          <td>Chaturanga</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Canya</td>
          <td>4444444443</td>
          <td>PFC</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Danya</td>
          <td>4444444444</td>
          <td>XCITE</td>
        </tr>
      </tbody>
</table>
    </>
  )
}