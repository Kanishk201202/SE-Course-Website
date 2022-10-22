import React from 'react'
import Navigationbar from '../components/Navigationbar'

export default function Medicalhistory() {
  return (
    <>
    <Navigationbar/>
    <br/>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Medical Problems</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Kanishk</td>
          <td>Stomach ache</td>
    
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Kanishk</td>
          <td>Headache</td>
          
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Kanishk</td>
          <td>Migrain</td>
         
        </tr>
      </tbody>
</table>
</>
  )
}
