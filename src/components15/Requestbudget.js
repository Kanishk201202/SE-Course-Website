import React from 'react';
import Navigationbar from '../components/Navigationbar';
import img1 from './images/2020.jpg';
export default function Requestbudget() {

    
    return (
    <>
     {/*Navigation bar for navigating*/}
        <Navigationbar/>
        <br/>
         {/*download form for requesting budget*/}
        <h2>Form for requesting budget</h2>
        <br/>
        Hehe Cato
        <br/>
        <img src={img1} className="img-fluid shadow-4" alt="..."/>
    </>
  )
}
