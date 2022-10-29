import React from 'react';
import Navigationbar1 from '../components/Navigationbar1';
export default function VisitorslogbookA() {

    
    return (
    <>
    {/*Navigation bar for navigating*/}
        <Navigationbar1/>
        <br/>
        <h2>Visitors Logbook</h2>
        <br/>
        {/*table for visitors logbook*/}
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Date and Time of entry</th>
          <th scope="col">Date and Time of exit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Anya</td>
          <td>4444444441</td>
          <td>22nd October, 2022</td>
          <td>9:00</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Banya</td>
          <td>4444444442</td>
          <td>22nd October, 2022</td>
          <td>12:00</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Canya</td>
          <td>4444444443</td>
          <td>22nd October, 2022</td>
          <td>17:00</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Danya</td>
          <td>4444444444</td>
          <td>23rd October, 2022</td>
          <td>17:00</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Fanya</td>
          <td>4444444445</td>
          <td>23rd October, 2022</td>
          <td>17:00</td>
          
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Ganya</td>
          <td>4444444446</td>
          <td>23rd October, 2022</td>
          <td>17:00</td>
          
        </tr>
      </tbody>
</table>
    </>
  )
}
