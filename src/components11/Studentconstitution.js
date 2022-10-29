import React from 'react'
import Navigationbar from '../components/Navigationbar';
import img1 from './images/2.jpg';
export default function Studentconstitution() {
  return (
    <>
      {/*Navigation bar for navigating*/}
      <Navigationbar/>
      <br/>
      <h2>Student Constitution</h2>
      <br/>
        {/*download student constitution*/}
      <p className="fs-6 mt-2 mb-0"> To download Constitution Brochure: <a href="/pdf/StudentsConstitution.pdf" download> Click here </a></p>

      <img src={img1} className="img-fluid shadow-4" alt="..."/>
    </>
  )
}