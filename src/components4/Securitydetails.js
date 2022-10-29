import React from 'react'
import Navigationbar from '../components/Navigationbar';
export default function Securitydetails() {
  return (
    <>
    {/*Navigation bar for navigating*/}
    <Navigationbar/>
    <br/>
    <h2>Security Guard Details</h2>
    <br/>
    {/*table for security guard details*/}
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Security Guards</th>
          <th scope="col">Contact</th>
          
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Security Gurad A</td>
          <td>4444444441</td>
          
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Security Gurad B</td>
          <td>4444444442</td>
          
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Security Gurad C</td>
          <td>4444444443</td>
          
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Security Gurad D</td>
          <td>4444444444</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Security Gurad F</td>
          <td>4444444445</td>
          
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Security Gurad G</td>
          <td>4444444446</td>
          
        </tr>
      </tbody>
</table>
</>
  )
}