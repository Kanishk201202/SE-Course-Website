import React from 'react'

export default function Administrativeinterface() {
  return (
    <>
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Student Input</th>
          <th scope="col">Remarks</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Ganesh Chandra</td>
          <td>Found Helpful</td>
          <td>Very bad progress</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Pranav Sutar</td>
          <td>Excited for another session</td>
          <td>Not quite exciting</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Arush Tiwari</td>
          <td>Didn't found that much helpful</td>
          <td>Good Session</td>
        </tr>
      </tbody>
</table>
<br/>
<table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Repeat Session</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Ganesh Chandra</td>
          <td>Substance Abuse Councelling</td>
          <td>Yes, Required</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Pranav Sutar</td>
          <td>Educational Councelling</td>
          <td>Yes, Required</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Arush Tiwari</td>
          <td>Mental Health Councelling</td>
          <td>Not Required</td>
        </tr>
      </tbody>
</table>
    </>
  )
}