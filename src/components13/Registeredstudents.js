import React from 'react'

export default function Registeredstudents() {
  return (
    <>
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Progress Status</th>
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
          <td>No Progress</td>
          <td>Yes, Required</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Arush Tiwari</td>
          <td>Good Progress</td>
          <td>Not Required</td>
        </tr>
      </tbody>
</table>
    </>
  )
}