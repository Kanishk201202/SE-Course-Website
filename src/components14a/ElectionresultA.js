import React from 'react'
import Navigationbar1 from '../components/Navigationbar1'

export default function ElectionresultA() {
  return (
    <>
      {/*Navigation bar for navigating*/}
        <Navigationbar1/>
        <br/>
        <h2>Result of Elections</h2>
        <br/>
           {/*table for result of election*/}
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Candidate Name</th>
          <th scope="col">Position</th>
          <th scope="col">Result</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Kanishk Kumar</td>
          <td>Student General Secretary</td>
          <td>Elected</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Aditya Pandey</td>
          <td>Sports Secretary</td>
          <td>Elected</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Anurag Kumar</td>
          <td>Mess Secretary</td>
          <td>Elected</td>
        </tr>
      </tbody>
</table>
    </>
  )
}
