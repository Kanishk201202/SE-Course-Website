import React from 'react'
import Navigationbar1 from '../components/Navigationbar1';
import img1 from './images/2.jpg';
export default function StudentconstitutionA() {
  return (
    <>
      <Navigationbar1/>
      <br/>
      <p className="fs-6 mt-2 mb-0"> To download Constitution Brochure: <a href="/pdf/StudentsConstitution.pdf" download> Click here </a></p>

      <img src={img1} className="img-fluid shadow-4" alt="..."/>
    </>
  )
}