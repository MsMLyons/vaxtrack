import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import vaccines_list from './VaccineListLocalStorage.js'

import '../Style/VaccineList.css'

const Vaccine = (props) => (
    <tr>
        <td>{props.vaccine.vaccineName}</td>
        <td>{props.vaccine.dateGiven}</td>
        <td>{props.vaccine.dose}</td>
        <td>{props.vaccine.expiration}</td>
        <td>{props.vaccine.manufacturer}</td>
        <td>{props.vaccine.medicalProfessional}</td>
        <td>{props.vaccine.frequency}</td>
        <td>{props.vaccine.description}</td> 
        <td> 
            <Link className="btn btn-link" to={`/edit/${props.vaccine._id}`}>Edit</Link> |
            <button className="btn btn-link"
                onClick={() => {
                    props.deleteVaccine(props.vaccine._id);
                }}
            >
            Delete
            </button>
        </td>       
    </tr>
);

export default function VaccineList() {
    const navigate = useNavigate();
    const [vaccines, setVaccines] = useState([]);
    function addNewVaccine(){
        navigate("/createVaccine")
    }
    function returnToDashboard(){
      navigate("/userDashboard");
    }

    function navigateToCreateVaccine(){
        navigate('/createVaccine');
    }

    // fetch vaccination records from db
    //WHEN SERVER WILL WORK REMOVE LINE 61 and comment out rest of code in useEffect
    useEffect(() => {
        // async function getVaccines() {
        //     const response = await fetch(`http://localhost:5000/vaccine/`); // if this url doesn't work, then make vaccine plural

        //     if (!response.ok) {
        //         const message = `An error occured: ${response.statusText}`;
        //         window.alert(message);
        //         return;
        //     }

        //     const vaccines = await response.json();
        //     setVaccines(vaccines);            
        // }

        // getVaccines();
        setVaccines(vaccines_list)

        return;
    }, [vaccines.length]);

    // delete a vaccination record
    async function deleteVaccine(id) {
        // await fetch(`http://localhost:5000/${id}`, { 
        //     method: 'DELETE'
        // });

        const newVaccines = vaccines.filter((el) => el.id !== id);
        setVaccines(newVaccines);
    }

    // map out vaccines in the db
    function vaccineList() {
        return filteredVaccines.map((vaccine) => {
            return (
                <Vaccine
                    vaccine={vaccine}
                    deleteVaccine={() => deleteVaccine(vaccine._id)}
                    key={vaccine._id}
                />
            );
        });
    }
    //commented below section out as it was interferring with navigation for buttons, giving a type as null error in console
 
    const[searchVal, setSearchVal]=useState("")
    let filteredVaccines = vaccines.filter(vaccine => {
    return vaccine.vaccineName.toLowerCase().includes(searchVal.toLowerCase()) || vaccine.description.toLowerCase().includes(searchVal.toLowerCase()) 
  })
    // display vaccine records
    return (
        <div className="vaccine-table-dashboard">
            <div className="new-family-member-headline">
                <div className="return-btn-container">
                    <button className="btn btn-outline-info" onClick={returnToDashboard}>Return to dashboard</button> 
                    <button className="btn btn-outline-info" onClick={navigateToCreateVaccine}>Add new vaccine record</button></div>
                    <input placeholder="Search..." onChange={(e)=>setSearchVal(e.target.value)}/>
                </div>
            <h4 className="h4">Vaccination records </h4>
            <div className="vaccine-table">
            <table className="table table-striped">
                <thead style={{position:"sticky", top:"0", zIndex:"1", background:"white", width: "100vw"}}>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date Given</th>
                        <th scope="col">Dose</th>
                        <th scope="col">Expiration</th>
                        <th scope="col">Manufacturer</th>
                        <th scope="col">Medical Professional</th>
                        <th scope="col">Frequency</th>
                        <th scope="col">Description</th>  
                        <th></th>                      
                    </tr>
                </thead>
                <tbody>{vaccineList()}</tbody>
            </table>
            </div>
        </div>
    );
}