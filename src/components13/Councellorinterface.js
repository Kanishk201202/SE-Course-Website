import React from 'react'
import Navigationbar from '../components/Navigationbar'

export default function Councellorinterface() {
  return (
    <>
    <Navigationbar />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Remarks</th>
          <th scope="col">Repeat Session</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Ganesh Chandra</td>
          <td>Very bad progress</td>
          <td>Yes, Required</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Pranav Sutar</td>
          <td>Not quite exciting</td>
          <td>Yes, Required</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Arush Tiwari</td>
          <td>Good Session</td>
          <td>Not Required</td>
        </tr>
      </tbody>
</table>
</>
  )
}
