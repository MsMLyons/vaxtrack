import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    const [vaccines, setVaccines] = useState([]);

    // fetch vaccination records from db
    useEffect(() => {
        async function getVaccines() {
            const response = await fetch(`http://localhost:5000/vaccine/`); // if this url doesn't work, then make vaccine plural

            if (!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const vaccines = await response.json();
            setVaccines(vaccines);            
        }

        getVaccines();

        return;
    }, [vaccines.length]);

    // delete a vaccination record
    async function deleteVaccine(id) {
        await fetch(`http://localhost:5000/${id}`, { 
            method: 'DELETE'
        });

        const newVaccines = vaccines.filter((el) => el.id !== id);
        setVaccines(newVaccines);
    }

    // map out vaccines in the db
    function vaccineList() {
        return vaccines.map((vaccine) => {
            return (
                <Vaccine
                    vaccine={vaccine}
                    deleteVaccine={() => deleteVaccine(vaccine._id)}
                    key={vaccine._id}
                />
            );
        });
    }

    // display vaccine records
    return (
        <div>
            <h3>Vaccine List</h3>
            <table className="table table">
                <thead>
                    <tr>
                        <th>Vaccine Name</th>
                        <th>Date Given</th>
                        <th>Dose</th>
                        <th>Expiration</th>
                        <th>Manufacturer</th>
                        <th>Medical Professional</th>
                        <th>Frequency</th>
                        <th>Description</th>                        
                    </tr>
                </thead>
                <tbody>{vaccineList()}</tbody>
            </table>
        </div>
    );
}