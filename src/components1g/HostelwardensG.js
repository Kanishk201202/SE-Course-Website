import React from 'react'
import Navigationbar2 from '../components/Navigationbar2'
export default function HostelwardensG() {
  return (
    <>
    {/*Navigation bar for navigating */}
    <Navigationbar2/>
    <br/>
    <h1>Hostel Wardens</h1>
    <br/>
    {/*Table for Hostel Wardens */}
    <table class="table">
      <thead>
        <tr>
          <th scope="col">S No.</th>
          <th scope="col">Wardens</th>
          <th scope="col">Contact Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Dr. Narendra Singh</td>
          <td>9936337743</td>
         
          
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Dr. Aditya Singh</td>
          <td>4445557771</td>
          
          
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Dr.Anurag Kumar</td>
          <td>4445557772</td>
          
          
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Dr. Rohini Singh</td>
          <td>4445557773</td>
          
          
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Dr. Devishi Madan</td>
          <td>4445557774</td>
          
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Dr. Rakesh Kumar</td>
          <td>4445557775</td>
         
        </tr>
      </tbody>
</table>
    </>
  )
}
