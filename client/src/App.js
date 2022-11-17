// import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import VaccineList from "./components/vaccineList";
import CreateVaccine from "./components/createVaccine";
import EditVaccine from "./components/editVaccine";

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<VaccineList />} />
        <Route path="/createVaccine" element={<CreateVaccine />} />
        <Route path="/editVaccine" element={<EditVaccine />} />
      </Routes>
    </div>
  );
};

export default App;
