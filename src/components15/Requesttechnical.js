import React from 'react'
import img1 from './images/2020.jpg';
export default function Studentregistration() {
  return (
    <>
    <p className="fs-6 mt-2 mb-0"> To apply for Technical Project download this form: <a href="/pdf/Formone.pdf" download> Click here </a></p>
    <br/>
    <img src={img1} className="img-fluid shadow-4" alt="..."/>
  </>
  )
}