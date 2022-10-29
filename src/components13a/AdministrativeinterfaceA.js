import React from 'react'
import Navigationbar1 from '../components/Navigationbar1'

export default function AdministrativeinterfaceA() {
  return (
    <>
     {/*Navigation bar for navigating*/}
        <Navigationbar1/>
        <br/>
        <h2>Administrative Interface</h2>
        <br/>
        <h3>Input from Students</h3>
        <br/>
         {/*table for input from students*/}
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
<h3>Category of Students for Councelling</h3>
<br/>
 {/*table for list of students for councelling */}
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