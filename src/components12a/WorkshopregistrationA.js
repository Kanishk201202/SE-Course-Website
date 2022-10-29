import React from 'react'
import { a, NavLink } from 'react-router-dom';
import Navigationbar1 from '../components/Navigationbar1'

export default function WorkshopregistrationA() {
  return (
    <>
      {/*Navigation bar for navigating*/}
        <Navigationbar1/>
        <br/>
        <h2>Students registered for Workshops</h2>
        <br/>
          {/*table for students registered for workshop*/}
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Workshop</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Anya</td>
          <td>4444444441</td>
          <td>Problem Solving</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Banya</td>
          <td>4444444442</td>
          <td>Artificial Intelligence</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Canya</td>
          <td>4444444443</td>
          <td>Machine Learning</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Danya</td>
          <td>4444444444</td>
          <td>Robotics</td>
        </tr>
      </tbody>
</table>
    </>
  )
}