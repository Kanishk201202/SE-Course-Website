import React from 'react'
import Navigationbar1 from '../components/Navigationbar1';
import img1 from './images/2020.jpg';
export default function RequesttechnicalA() {
  return (
    <>
     {/*Navigation bar for navigating*/}
    <Navigationbar1/>
    <br/>
    <h2>Requesting for Techincal Projects</h2>
        <br/>
         {/*table for list of students requesting for technical project*/}
       <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Request for Technical Projects</th>
          <th scope="col">Details</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Anya</td>
          <td>4444444441</td>
          <td>Researching about chemical oil plant</td>
          <td>To do a research project on extraction of oil in an oil plant.</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Banya</td>
          <td>4444444442</td>
          <td>Machine Learning</td>
          <td>To do a reasearch project in mahcine learning</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Canya</td>
          <td>4444444443</td>
          <td>Building a robot</td>
          <td>Permission for building and designing a robot</td>
        </tr>
      </tbody>
</table>
  </>
  )
}