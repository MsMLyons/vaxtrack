// import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import VaccineList from "./Components/vaccineList";
import CreateVaccine from "./Components/createVaccine";
import EditVaccine from "./Components/editVaccine";
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import About from "./Components/About"
import UserDashboard from "./Components/UserDashboard"
import NewFamilyMember from "./Components/NewFamilyMember"

function App() {
  return (
    <div className='page-container'>
    <div className="">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/createVaccine" element={<CreateVaccine />} />
        <Route path="/editVaccine" element={<EditVaccine />} />
        <Route path="/vaccineList" element={<VaccineList />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/newFamilyMember" element={<NewFamilyMember />} />
      </Routes>
    <div id="content-wrap">
        <footer className="partners">
          <img src="./pfizer.png" alt='..' className="logo-vaccine"/>
          <img src="./moderna.png" alt='..' className="logo-vaccine"/>
          <img src="./novartis.png" alt='..' className="logo-vaccine"/>
          <img src="./merk.png" alt='..' className="logo-vaccine"/>
          <img src="./johnson.png" alt='..' className="logo-vaccine"/>
        </footer>
      </div>
    </div>
    </div>
     
  );
};

export default App;
