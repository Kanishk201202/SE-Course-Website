import React from 'react'
import Navigationbar from '../components/Navigationbar';
import img1 from './images/2020.jpg';
export default function Requesttechnical() {
  return (
    <>
     {/*Navigation bar for navigating*/}
    <Navigationbar/>
    <br/>
    <h2>Requesting for Technical Project</h2>
     {/*download form for requesting for technical project*/}
    <p className="fs-6 mt-2 mb-0"> To apply for Technical Project download this form: <a href="/pdf/Formone.pdf" download> Click here </a></p>
    <br/>
    <img src={img1} className="img-fluid shadow-4" alt="..."/>
  </>
  )
}