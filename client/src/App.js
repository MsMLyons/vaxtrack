// import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import VaccineList from "./Components/vaccineList";
import CreateVaccine from "./Components/createVaccine";
import EditVaccine from "./Components/editVaccine";
import Home from "./Components/Home"

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/createVaccine" element={<CreateVaccine />} />
        <Route path="/editVaccine" element={<EditVaccine />} />
        <Route path="/vaccineList" element={<VaccineList />} />
      </Routes>
    </div>
  );
};

export default App;
