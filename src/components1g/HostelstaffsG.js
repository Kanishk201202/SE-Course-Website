import React from 'react';
import Navigationbar2 from '../components/Navigationbar2';
export default function HostelstaffsG() {
  return (
    <>
    {/*Navigation bar for navigating */}
    <Navigationbar2/>
    <br/>
    {/*Table for Staffs */}
    <h2>Hostel Staffs</h2>
    <br/>
       <table class="table">
      <thead>
        <tr>
          <th scope="col">S No.</th>
          <th scope="col">Hostel Staffs</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Assistant Warden A</td>
          <td>Aditya</td>
          <td>4445556661</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Assistant Warden B</td>
          <td>Anurag</td>
          <td>4445556662</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Assistant Warden C</td>
          <td>Harsh</td>
          <td>4445556663</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Assistant Warden D</td>
          <td>Anya</td>
          <td>4445556664</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Assistant Warden F</td>
          <td>Nami</td>
          <td>4445556665</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Assistant Warden G</td>
          <td>Saurav</td>
          <td>4445556666</td>
        </tr>
      </tbody>
</table>
    </>
  )
}
