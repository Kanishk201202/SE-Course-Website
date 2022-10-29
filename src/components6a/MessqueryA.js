import React from 'react';
import Navigationbar1 from '../components/Navigationbar1';

export default function MessqueryA() {

    
    return (
    <>
     {/*Navigation bar for navigating*/}
        <Navigationbar1/>
        <br/>
        <h2>Form for Mess Query</h2>
        <br/>
         {/*table for query submitted by students and guests*/}
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Query</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Anya</td>
          <td>123467890</td>
          <td>Table and plates not clean</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Banya</td>
          <td>0987654321</td>
          <td>Many houseflies flying around</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Canya</td>
          <td>123784560</td>
          <td>Food doesn't taste good</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Danya</td>
          <td>4560123789</td>
          <td>Rotis are hard</td>
        </tr>
      </tbody>
</table>
    </>
  )
}
