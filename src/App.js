
import './App.css';

import React, {useState} from 'react';
import Hostelstaffs from './components1/Hostelstaffs';
import Hosteldetails from './components1/Hosteldetails';
import Hostelinventory from './components1/Hostelinventory';
import Hostelwardens from './components1/Hostelwardens';
import Studentadmission from './components2/Studentadmission';
import Hostelfees from './components2/Hostelfees';
import Hostelinformation from './components2/Hostelinformation';
import Hosteladmission from './components2/Hosteladmission';
import Studentroom from './components3/Studentroom';
import Vacatingroom from './components3/Vacatingroom';
import Roomallocation from './components3/Roomallocation';
import Changeroom from './components3/Changeroom';
import Studentrecord from './components4/Studentrecord';
import Securitydetails from './components4/Securitydetails';
import Hostellogbook from './components4/Hostellogbook';
import Studentregistration from './components5/Studentregistration';
import Vacationregistration from './components5/Vacationregistration';
import Messregistration from './components5/Messregistration';
import Messrebate from './components5/Messrebate';
import Ccdepartment from './components6/Ccdepartment';
import Eudepartment from './components6/Eudepartment';
import Messquery from './components6/Messquery';
import Hostelquery from './components6/Hostelquery';
import Bookappointment from './components7/Bookappointment';
import Medicalhistory from './components7/Medicalhistory';
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
import HosteldetailsA from './components1a/HosteldetailsA';
import HostelstaffsA from './components1a/HostelstaffsA';
import HostelwardensA from './components1a/HostelwardensA';
import HostelinventoryA from './components1a/HostelinventoryA';
import HostelfeesA from './components2a/HostelfeesA';
import HostelinformationA from './components2a/HostelinformationA';
import HosteladmissionA from './components2a/HosteladmissionA';
import HostellogbookA from './components4a/HostellogbookA';
import SecuritydetailsA from './components4a/SecuritydetailsA';
import VisitorslogbookA from './components4a/VisitorslogbookA';
import MessqueryA from './components6a/MessqueryA';
import EudepartmentA from './components6a/EudepartmentA';
import CcdepartmentA from './components6a/CcdepartmentA';
import HostelqueryA from './components6a/HostelqueryA';
import MedicalA from './components7a/MedicalA';
import BookappointmentA from './components7a/BookappointmentA';
import MedvisitsA from './components7a/MedvisitsA';
import AmmendconstitutionA from './components11a/AmmendconstitutionA';
import ConstitutionA from './components11a/ConstitutionA';
import StudentconstitutionA from './components11a/StudentconstitutionA';
import AbouteventsA from './components12a/AbouteventsA';
import TechnicalactivitiesA from './components12a/TechnicalactivitiesA';
import TechnicalclubsA from './components12a/TechnicalclubsA';
import TechnicaleventsA from './components12a/TechnicaleventsA';
import FeedbackA from './components12a/FeedbackA';
import WorkshopregistrationA from './components12a/WorkshopregistrationA';
import AdministrativeinterfaceA from './components13a/AdministrativeinterfaceA';
import CouncellorinterfaceA from './components13a/CouncellorinterfaceA';
import GcuA from './components13a/GcuA';
import RegisteredstudentsA from './components13a/RegisteredstudentsA';
import RegisterissueA from './components13a/RegisterissueA';
import ElectionresultA from './components14a/ElectionresultA';
import ElectionregistrationA from './components14a/ElectionregistrationA';
import StudentA from './components14a/StudentA';
import StudentclubapplicationA from './components14a/StudentclubapplicationA';
import StudentclubsA from './components14a/StudentclubsA';
import StudentclubsubscriptionA from './components14a/StudentclubsubscriptionA';
import DownloadsA from './components15a/DownloadsA';
import RequestbudgetA from './components15a/RequestbudgetA';
import RequestparticipationA from './components15a/RequestparticipationA';
import RequesttechnicalA from './components15a/RequesttechnicalA';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import HosteldetailsG from './components1g/HosteldetailsG';
import HostelinventoryG from './components1g/HostelinventoryG';
import HostelstaffsG from './components1g/HostelstaffsG';
import HostelwardensG from './components1g/HostelwardensG';
import GuestadmissionG from './components2g/GuestadmissionG';
import HosteladmissionG from './components2g/HosteladmissionG';
import HostelfeesG from './components2g/HostelfeesG';
import HostelinformationG from './components2g/HostelinformationG';
import GuestroomG from './components3g/GuestroomG';
import RoomallocationG from './components3g/RoomallocationG';
import GuestregistartionG from './components5g/GuestregistrationG';
import MessregistrationG from './components5g/MessregistrationG';
import HostelqueryG from './components6g/HostelqueryG';
import MessqueryG from './components6g/MessqueryG';
import BookappointmentG from './components7g/BookappointmentG';
import MedicalG from './components7g/MedicalG';
import FeedbackG from './components12g/FeedbackG';
import TechnicalactivitiesG from './components12g/TechnicalactivitiesG';
import TechnicalclubsG from './components12g/TechnicalclubsG';
import TechnicaleventsG from './components12g/TechnicaleventsG';
import StudentG from './components14g/StudentG';
import StudentclubsG from './components14g/StudentclubsG';
import StudentclubsubscriptionG from './components14g/StudentclubsubscriptionG';
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
          <Route exact path="/hosteldetails" element={<Hosteldetails/>} />
          <Route exact path="/hostelstaffs" element={<Hostelstaffs/>} />
          <Route exact path="/hosteladmission" element={<Hosteladmission/>} />
          <Route exact path="/studentadmission" element={<Studentadmission/>} />
          <Route exact path="/hostelfees" element={<Hostelfees/>} />
          <Route exact path="/hostelinformation" element={<Hostelinformation/>} />
          <Route exact path="/roomallotment" element={<Roomallocation/>} />
          <Route exact path="/studentroom" element={<Studentroom/>} />
          <Route exact path="/vacatingroom" element={<Vacatingroom/>} />
          <Route exact path="/changeroom" element={<Changeroom/>} />
          <Route exact path="/hostellogbook" element={<Hostellogbook/>} />
          <Route exact path="/studentrecord" element={<Studentrecord/>} />
          <Route exact path="/securitydetails" element={<Securitydetails/>} />
          <Route exact path="/messregistration" element={<Messregistration/>} />
          <Route exact path="/vacationregistration" element={<Vacationregistration/>} />
          <Route exact path="/messrebate" element={<Messrebate/>} />
          <Route exact path="/studentregistration" element={<Studentregistration/>} />
          <Route exact path="/hostelquery" element={<Hostelquery/>} />
          <Route exact path="/ccdepartment" element={<Ccdepartment/>} />
          <Route exact path="/eudepartment" element={<Eudepartment/>} />
          <Route exact path="/messquery" element={<Messquery/>} />
          <Route exact path="/bookappointment" element={<Bookappointment/>} />
          <Route exact path="/medicalhistory" element={<Medicalhistory/>} />
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
          <Route exact path="/requesttechnical" element={<Requesttechnical/>} />
          <Route exact path="/requestbudget" element={<Requestbudget/>} />
          <Route exact path="/requestparticipation" element={<Requestparticipation/>} />
          <Route exact path="/downloads" element={<Downloads/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/studentlogin" element={<Studentlogin/>} />
          <Route exact path="/administrativelogin" element={<Administrativelogin/>} />
          <Route exact path="/guestlogin" element={<Guestlogin/>} />
          <Route exact path="/home1" element={<Home1/>} />
          <Route exact path="/hosteldetailsa" element={<HosteldetailsA/>} />
          <Route exact path="/hostelinventorya" element={<HostelinventoryA/>} />
          <Route exact path="/hostelwardensa" element={<HostelwardensA/>} />
          <Route exact path="/hostelstaffsa" element={<HostelstaffsA/>} />
          <Route exact path="/hosteladmissiona" element={<HosteladmissionA/>} />
          <Route exact path="/hostelfeesa" element={<HostelfeesA/>} />
          <Route exact path="/hostelinformationa" element={<HostelinformationA/>} />
          <Route exact path="/hostellogbooka" element={<HostellogbookA/>} />
          <Route exact path="/visitorslogbooka" element={<VisitorslogbookA/>} />
          <Route exact path="/securitydetailsa" element={<SecuritydetailsA/>} />
          <Route exact path="/hostelquerya" element={<HostelqueryA/>} />
          <Route exact path="/ccdepartmenta" element={<CcdepartmentA/>} />
          <Route exact path="/eudepartmenta" element={<EudepartmentA/>} />
          <Route exact path="/messquerya" element={<MessqueryA/>} />
          <Route exact path="/bookappointmenta" element={<BookappointmentA/>} />
          <Route exact path="/medvisitsa" element={<MedvisitsA/>} />
          <Route exact path="/medicalservicea" element={<MedicalA/>} />
          <Route exact path="/ammendconstitutiona" element={<AmmendconstitutionA/>} />
          <Route exact path="/studentconstitutiona" element={<StudentconstitutionA/>} />
          <Route exact path="/constitutiona" element={<ConstitutionA/>} />
          <Route exact path="/workshopregistrationa" element={<WorkshopregistrationA/>} />
          <Route exact path="/abouteventsa" element={<AbouteventsA/>} />
          <Route exact path="/technicaleventsa" element={<TechnicaleventsA/>} />
          <Route exact path="/technicalactivitiesa" element={<TechnicalactivitiesA/>} />
          <Route exact path="/technicalclubsa" element={<TechnicalclubsA/>} />
          <Route exact path="/feedbacka" element={<FeedbackA/>} />
          <Route exact path="/gcua" element={<GcuA/>} />
          <Route exact path="/registerissuea" element={<RegisterissueA/>}/>
          <Route exact path="/administartiveinterfacea" element={<AdministrativeinterfaceA/>} />
          <Route exact path="/councellorinterfacea" element={<CouncellorinterfaceA/>} />
          <Route exact path="/registeredstudentsa" element={<RegisteredstudentsA/>} />
          <Route exact path="/studenta" element={<StudentA/>} />
          <Route exact path="/studentclubsa" element={<StudentclubsA/>} />
          <Route exact path="/studentclubapplicationa" element={<StudentclubapplicationA/>}/>
          <Route exact path="/studentclubsubscriptiona" element={<StudentclubsubscriptionA/>} />
          <Route exact path="/electionregistrationa" element={<ElectionregistrationA/>} />
          <Route exact path="/electionresulta" element={<ElectionresultA/>} />
          <Route exact path="/requesttechnicala" element={<RequesttechnicalA/>} />
          <Route exact path="/requestbudgeta" element={<RequestbudgetA/>} />
          <Route exact path="/requestparticipationa" element={<RequestparticipationA/>} />
          <Route exact path="/downloadsa" element={<DownloadsA/>} />
          <Route exact path="/home2" element={<Home2/>} />
          <Route exact path="/hosteldetailsg" element={<HosteldetailsG/>} />
          <Route exact path="/hostelinventoryg" element={<HostelinventoryG/>} />
          <Route exact path="/hostelwardensg" element={<HostelwardensG/>} />
          <Route exact path="/hostelstaffsg" element={<HostelstaffsG/>} />
          <Route exact path="/hosteladmissiong" element={<HosteladmissionG/>} />
          <Route exact path="/guestadmissiong" element={<GuestadmissionG/>} />
          <Route exact path="/hostelfeesg" element={<HostelfeesG/>} />
          <Route exact path="/hostelinformationg" element={<HostelinformationG/>} />
          <Route exact path="/roomallotmentg" element={<RoomallocationG/>} />
          <Route exact path="/guestroomg" element={<GuestroomG/>} />
          <Route exact path="/messregistrationg" element={<MessregistrationG/>} />
          <Route exact path="/guestregistrationg" element={<GuestregistartionG/>} />
          <Route exact path="/hostelqueryg" element={<HostelqueryG/>} />
          <Route exact path="/messqueryg" element={<MessqueryG/>} />
          <Route exact path="/bookappointmentg" element={<BookappointmentG/>} />
          <Route exact path="/medicalserviceg" element={<MedicalG/>} />
          <Route exact path="/technicaleventsg" element={<TechnicaleventsG/>} />
          <Route exact path="/technicalactivitiesg" element={<TechnicalactivitiesG/>} />
          <Route exact path="/technicalclubsg" element={<TechnicalclubsG/>} />
          <Route exact path="/feedbackg" element={<FeedbackG/>} />
          <Route exact path="/studentg" element={<StudentG/>} />
          <Route exact path="/studentclubsg" element={<StudentclubsG/>} />
          <Route exact path="/studentclubsubscriptiong" element={<StudentclubsubscriptionG/>} />

        </Routes>
        </div>
      </Router>
  );
}

export default App;
