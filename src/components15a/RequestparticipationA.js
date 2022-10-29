import React from 'react'
import Navigationbar1 from '../components/Navigationbar1';
import img1 from './images/2020.jpg';
export default function RequestparticipationA() {
  return (
   <>
    {/*Navigation bar for navigating*/}
   <Navigationbar1/>
   <br/>
   <h2>Requesting for Participation</h2>
        <br/>
         {/*table for list of students requesting for participation*/}
       <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Request for Participation</th>
          <th scope="col">Details</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Anya</td>
          <td>4444444441</td>
          <td>Robotics Competition</td>
          <td>To participate in a national level robotics competition representing our college</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Banya</td>
          <td>4444444442</td>
          <td>Competitive Programming</td>
          <td>To participate in an international level competitive programming competition orgnanised by Google</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Canya</td>
          <td>4444444443</td>
          <td>Esaay Writing</td>
          <td>To participate in essay writing competition</td>
        </tr>
      </tbody>
</table>
   </>
  )
}