import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import React, {useState} from 'react';
import Roomoccupancydetails from './components1/Roomoccupancydetails';
import Hostelstaffs from './components1/Hostelstaffs';
import Hosteldetails from './components1/Hosteldetails';
import Hostelinventory from './components1/Hostelinventory';
import Hostelwardens from './components1/Hostelwardens';
import Studentadmission from './components2/Studentadmission';
import Guestadmission from './components2/Guestadmission';
import Hostelfees from './components2/Hostelfees';
import Hostelinformation from './components2/Hostelinformation';
import Hosteladmission from './components2/Hosteladmission';
import Studentroom from './components3/Studentroom';
import Guestroom from './components3/Guestroom';
import Vacatingroom from './components3/Vacatingroom';
import Roomallocation from './components3/Roomallocation';
import Changeroom from './components3/Changeroom';
import Studentrecord from './components4/Studentrecord';
import Visitorslogbook from './components4/Visitorslogbook';
import Securitydetails from './components4/Securitydetails';
import Hostellogbook from './components4/Hostellogbook';
import Studentregistration from './components5/Studentregistration';
import Guestregistration from './components5/Guestregistration';
import Vacationregistration from './components5/Vacationregistration';
import Messregistration from './components5/Messregistration';
import Messrebate from './components5/Messrebate';
import Ccdepartment from './components6/Ccdepartment';
import Eudepartment from './components6/Eudepartment';
import Messquery from './components6/Messquery';
import Hostelquery from './components6/Hostelquery';
import Bookappointment from './components7/Bookappointment';
import Medicalhistory from './components7/Medicalhistory';
import Medvisits from './components7/Medvisits';
import Medical from './components7/Medical';
import Ammendconstitution from './components11/Ammendconstitution';
import Studentconstitution from './components11/Studentconstitution';
import Constitution from './components11/Constitution';
import Workshopregistration from './components12/Workshopregistration';
import Aboutevents from './components12/Aboutevents';
import Technicalevents from './components12/Technicalevents';
import Technicalactivities from './components12/Technicalactivities';
import Technicalclubs from './components12/Technicalclubs';
import Feedback from './components12/Feedback';
import Student from './components14/Student';
import Electionwithdrawl from './components14/Electionwithdrawl';
import Studentclubs from './components14/Studentclubs';
import Electionregistration from './components14/Electionregistration';
import Studentclubapplication from './components14/Studentclubapplication';
import Studentclubsubscription from './components14/Studentclubsubscription';
import Castevote from './components14/Castevote';
import Electionresult from './components14/Electionresult';
import Booksession from './components13/Booksession';
import Administrativeinterface from './components13/Administrativeinterface';
import Councellorinterface from './components13/Councellorinterface';
import Registeredstudents from './components13/Registeredstudents';
import Registerissue from './components13/Registerissue';
import Gcu from './components13/Gcu';
import Requesttechnical from './components15/Requesttechnical';
import Requestbudget from './components15/Requestbudget';
import Requestparticipation from './components15/Requestparticipation';
import Downloads from './components15/Downloads';
import Home from './components/Home';
import Loginpage from './components/Loginpage';
import Studentlogin from './components/Studentlogin';
import Administrativelogin from './components/Administrativelogin';
import Guestlogin from './components/Guestlogin';
import Forgotpassword from './components/Forgotpassword';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
        
        <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<Loginpage/>}/>
          <Route exact path="/hostelinventory" element={<Hostelinventory/>} />
          <Route exact path="/hostelwardens" element={<Hostelwardens/>} />
          <Route exact path="/hosteldetailss" element={<Hosteldetails/>} />
          <Route exact path="/hostelstaffs" element={<Hostelstaffs/>} />
          <Route exact path="/roomocupancy" element={<Roomoccupancydetails/>} />
          <Route exact path="/hosteladmission" element={<Hosteladmission/>} />
          <Route exact path="/studentadmission" element={<Studentadmission/>} />
          <Route exact path="/guestadmission" element={<Guestadmission/>} />
          <Route exact path="/hostelfees" element={<Hostelfees/>} />
          <Route exact path="/hostelinformation" element={<Hostelinformation/>} />
          <Route exact path="/roomallotment" element={<Roomallocation/>} />
          <Route exact path="/studentroom" element={<Studentroom/>} />
          <Route exact path="/guestroom" element={<Guestroom/>} />
          <Route exact path="/vacatingroom" element={<Vacatingroom/>} />
          <Route exact path="/changeroom" element={<Changeroom/>} />
          <Route exact path="/hostellogbook" element={<Hostellogbook/>} />
          <Route exact path="/studentrecord" element={<Studentrecord/>} />
          <Route exact path="/visitorslogbook" element={<Visitorslogbook/>} />
          <Route exact path="/securitydetails" element={<Securitydetails/>} />
          <Route exact path="/messregistration" element={<Messregistration/>} />
          <Route exact path="/vacationregistration" element={<Vacationregistration/>} />
          <Route exact path="/messrebate" element={<Messrebate/>} />
          <Route exact path="/studentregistration" element={<Studentregistration/>} />
          <Route exact path="/guestregistration" element={<Guestregistration/>} />
          <Route exact path="/hostelquery" element={<Hostelquery/>} />
          <Route exact path="/ccdepartment" element={<Ccdepartment/>} />
          <Route exact path="/eudepartment" element={<Eudepartment/>} />
          <Route exact path="/messquery" element={<Messquery/>} />
          <Route exact path="/bookappointment" element={<Bookappointment/>} />
          <Route exact path="/medicalhistory" element={<Medicalhistory/>} />
          <Route exact path="/medvisits" element={<Medvisits/>} />
          <Route exact path="/medicalservice" element={<Medical/>} />
          <Route exact path="/ammendconstitution" element={<Ammendconstitution/>} />
          <Route exact path="/studentconstitution" element={<Studentconstitution/>} />
          <Route exact path="/constitution" element={<Constitution/>} />
          <Route exact path="/workshopregistration" element={<Workshopregistration/>} />
          <Route exact path="/aboutevents" element={<Aboutevents/>} />
          <Route exact path="/technicalevents" element={<Technicalevents/>} />
          <Route exact path="/technicalactivities" element={<Technicalactivities/>} />
          <Route exact path="/technicalclubs" element={<Technicalclubs/>} />
          <Route exact path="/feedback" element={<Feedback/>} />
          <Route exact path="/student" element={<Student/>} />
          <Route exact path="/studentclubs" element={<Studentclubs/>} />
          <Route exact path="/studentclubapplication" element={<Studentclubapplication/>}/>
          <Route exact path="/studentclubsubscription" element={<Studentclubsubscription/>} />
          <Route exact path="/electionregistration" element={<Electionregistration/>} />
          <Route exact path="/electionwithdrawl" element={<Electionwithdrawl/>} />
          <Route exact path="/castevote" element={<Castevote/>} />
          <Route exact path="/electionresult" element={<Electionresult/>} />
          <Route exact path="/gcu" element={<Gcu/>} />
          <Route exact path="/booksession" element={<Booksession/>} />
          <Route exact path="/registerissue" element={<Registerissue/>}/>
          <Route exact path="/administartiveinterface" element={<Administrativeinterface/>} />
          <Route exact path="/councellorinterface" element={<Councellorinterface/>} />
          <Route exact path="/registeredstudents" element={<Registeredstudents/>} />
          <Route exact path="/requesttechnical" element={<Requesttechnical/>} />
          <Route exact path="/requestbudget" element={<Requestbudget/>} />
          <Route exact path="/requestparticipation" element={<Requestparticipation/>} />
          <Route exact path="/download" element={<Downloads/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/studentlogin" element={<Studentlogin/>} />
          <Route exact path="/administrativelogin" element={<Administrativelogin/>} />
          <Route exact path="/guestlogin" element={<Guestlogin/>} />
          <Route exact path="/forgotpassword" element={<Forgotpassword/>} />
        </Routes>
        </div>
      </Router>
  );
}

export default App;
