import React from 'react'
import Navigationbar2 from '../components/Navigationbar2'

export default function TechnicaleventsG() {
  return (
    <>
    {/*Navigation bar for navigating*/}
      <Navigationbar2/>
      <br/>
      <h2>Technical Events</h2>
      <br/>
       {/*about technical events*/}
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Technical Event</th>
          <th scope="col">Technical Club</th>
          <th scope="col">Date(DD-MM-YYYY)</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Coding Round</td>
          <td>DigitalWizards</td>
          <td>10-09-2022</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Moon Watch Party</td>
          <td>Gaganvedhi</td>
          <td>17-09-2022</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>MERN stack demo</td>
          <td>DigitalWizards</td>
          <td>24-09-2022</td>
        </tr>
      </tbody>
</table>
    </>
  )
}