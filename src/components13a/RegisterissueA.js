import React from 'react';
import Navigationbar1 from '../components/Navigationbar1';

export default function RegisterissueA() {
  return (
    <>
     {/*Navigation bar for navigating*/}
        <Navigationbar1/>
        <br/>
        <h2>Registered Issues</h2>
        <br/>
         {/*table for issues registered by students*/}
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Issue</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Anya</td>
          <td>4444444441</td>
          <td>Not getting much help from GCU sessions.</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Banya</td>
          <td>4444444442</td>
          <td>Booked an appointment but it was cancelled.</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Canya</td>
          <td>4444444443</td>
          <td>Cannot book appointment because councellor not available.</td>
        </tr>
      </tbody>
</table>
    </>
  )
}
