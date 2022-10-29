import React from 'react'
import Navigationbar1 from '../components/Navigationbar1'

export default function MedvisitsA() {
  return (
    <>
    {/*Navigation bar for navigating*/}
    <Navigationbar1/>
    <br/>
    <h2>Medical Visits</h2>
    <br/>
    {/*table for medical visits*/}
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Date(DD-MM-YYYY)</th>
          <th scope="col">Time(24 hour)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Kanishk</td>
          <td>04-09-2022</td>
          <td>17:00</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Harsh</td>
          <td>04-09-2022</td>
          <td>16:00</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Saurav</td>
          <td>03-09-2022</td>
          <td>10:00</td>
        </tr>
      </tbody>
</table>
</>
  )
}
