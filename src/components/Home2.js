import React from 'react'
import { a, NavLink } from 'react-router-dom';
import Navigationbar2 from './Navigationbar2';
export default function Home2() {
  return (
    <>
        {/* Navigation bar to navigate thorugh different components */}
      <Navigationbar2/>
      <br/>
      <h1>Welcome!</h1>
      <br/>
      <ol className="list-group list-group-numbered">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">News </div>
      Topic - 1 
    </div>
    <span className="badge bg-primary rounded-pill">5</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">News</div>
      Topic - 2
    </div>
    <span className="badge bg-primary rounded-pill">3</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">News</div>
      Topic - 3
    </div>
    <span className="badge bg-primary rounded-pill">7</span>
  </li>
</ol>
    </>
  )
}