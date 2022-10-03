import React from 'react'
import Navigationbar from '../components/Navigationbar'
export default function Roomoccupancydetails() {
  return (
    <>
    <Navigationbar/>

        <h1>Room Occupancy</h1>
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Hostel A</th>
          <th scope="col">Hostel B</th>
          <th scope="col">Hostel c</th>
          <th scope="col">Hostel D</th>
          <th scope="col">Hostel F</th>
          <th scope="col">Hostel G</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>5</td>
          <td>4</td>
          <td>6</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>5</td>
          <td>4</td>
          <td>6</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>5</td>
          <td>4</td>
          <td>6</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>5</td>
          <td>4</td>
          <td>6</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>5</td>
          <td>4</td>
          <td>6</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>5</td>
          <td>4</td>
          <td>6</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </tbody>
</table>
    </>
  )
}