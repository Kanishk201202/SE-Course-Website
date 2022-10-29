import React from 'react'
import { a, NavLink } from 'react-router-dom';
import Navigationbar1 from '../components/Navigationbar1'

export default function TechnicalclubsA() {
  return (
    <>
    {/*Navigation bar for navigating*/}
       <Navigationbar1/>
       <br/>
       <h2>Technical Clubs</h2>
       <br/>
       {/*about technical clubs*/}
       <div class="row ">
        <div class="col">
            <div className="card text-bg-dark mb-3" style={{"maxWidth": "18rem"}}>
                <div className="card-header">Techmania</div>
                <div className="card-body">
                  <h5 className="card-title">Contact</h5>
                  <p className="card-text">Email - techmaniacs@iittp.ac.in</p>
                </div>
            </div>
          </div>
  <div class="col">
  <div className="card text-bg-dark mb-3" style={{"maxWidth": "18rem"}}>
                <div className="card-header">DigitalWizards</div>
                <div className="card-body">
                  <h5 className="card-title">Contact</h5>
                  <p className="card-text">Email - codeclub@iittp.ac.in</p>
                </div>
              </div>
  </div>
  <div class="col">
  <div className="card text-bg-dark mb-3" style={{"maxWidth": "18rem"}}>
                <div className="card-header">Gaganvedhi</div>
                <div className="card-body">
                  <h5 className="card-title">Contact</h5>
                  <p className="card-text">Email - astronomyclub@iittp.ac.in</p>
                </div>
    </div>

  </div>
</div>
    </>
  )
}
