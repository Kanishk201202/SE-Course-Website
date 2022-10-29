import React from 'react';
import Navigationbar1 from '../components/Navigationbar1';
import img1 from './images/2020.jpg';
export default function RequestbudgetA() {

    
    return (
    <>
     {/*Navigation bar for navigating*/}
        <Navigationbar1/>
        <br/>
        <h2>Requesting for Budget</h2>
        <br/>
         {/*table for list of students requesting for budget*/}
       <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Request for budget</th>
          <th scope="col">Details</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Anya</td>
          <td>4444444441</td>
          <td>Ganganvedhi</td>
          <td>To organise red moon watching event</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Banya</td>
          <td>4444444442</td>
          <td>DigitalWizards</td>
          <td>To organise a workshop on software engineering</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Canya</td>
          <td>4444444443</td>
          <td>Techmania</td>
          <td>To organise a competition for Robotics</td>
        </tr>
      </tbody>
</table>
    </>
  )
}
