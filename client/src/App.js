// import './App.css';
import React, {useState} from 'react';
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
import Footer from "./Components/Footer"

function App() {
      let members =[
      {id: 1,
      name: "Kate",
      picture: './avatar1.png'
      },
      {id: 2,
      name: "Samantha",
      picture: './avatar2.png'
      },
      {id: 3,
      name: "John",
      picture: './avatar3.png'
      }]
    const[familyMembers, setFamilyMembers]=useState(members)
    const[loggedIn, setLoggedIn]=useState(false)
  return (
    <div className='page-container'>
    
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/createVaccine" element={<CreateVaccine />} />
        <Route path="/editVaccine" element={<EditVaccine />} />
        <Route path="/vaccineList" element={<VaccineList />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/About" element={<About />} />
        <Route path="/userDashboard"  element={<UserDashboard familyMembers={familyMembers} setFamilyMembers={setFamilyMembers} />} />
        <Route path="/newFamilyMember"  element={<NewFamilyMember familyMembers={familyMembers} setFamilyMembers={setFamilyMembers}/>} />
      </Routes>
    <Footer/>
      </div>
    
   
     
  );
};

export default App;
