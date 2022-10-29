import React from 'react'
import { a, NavLink } from 'react-router-dom';
import Navigationbar1 from '../components/Navigationbar1'

export default function FeedbackA() {
  return (
    <>
    {/*Navigation bar for navigating*/}
        <Navigationbar1/>
        <br/>
        <h2>Feedback from Students and Guests</h2>
        <br/>
        {/*Table fro feedback by students and guests*/}
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Feedback</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Anya</td>
          <td>4444444441</td>
          <td>Artificial Intelligence workshop was good and informative.</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Banya</td>
          <td>4444444442</td>
          <td>Moon watch party event was well organised.</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Canya</td>
          <td>4444444443</td>
          <td>Robotics workshop was good</td>
        </tr>
      </tbody>
</table>
    </>
  )
}
