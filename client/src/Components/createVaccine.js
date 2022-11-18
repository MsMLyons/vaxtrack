import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
import VaccineList from './vaccineList';
import {Routes, Route, useNavigate} from 'react-router-dom';
import '../Style/createVaccine.css'

export default function CreateVaccine() {
    const [form, setForm] = useState({
        vaccineName: '',
        dateGiven: '',
        dose: '',
        expiration: '',            
        manufacturer: '',
        medicalProfessional: '',
        frequency: '',
        description: '',
    });
    const navigate = useNavigate();

    const navigateToVaccineList = () => {
        navigate('/vaccineList');
    };

    // update state properties
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // handle submission
    async function onSubmit(e) {
        e.preventDefault();

        // add a new vaccine record to the db
        const newVaccine = { ...form };

        await fetch('http://localhost:5000/vaccine/add', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify(newVaccine),
        })
        .catch(err => {
            window.alert(err); // how to add unique error message here?
            return;
        });

        setForm({  
            vaccineName: '', 
            dateGiven: '',
            dose: '',
            expiration: '',            
            manufacturer: '',
            medicalProfessional: '',
            frequency: '',
            description: '',
        });
        navigate('/'); // make sure this route is correct
    }

    // form to create the vaccine record
    // add additional vaccine names to select from
    // may need to read form values for typos and info errors
    return (

        <div className="vaccineAddForm">
            <h3>Add a New Vaccine Record</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="vaccineName">Vaccine Name</label>
                    <select 
                        name="vaccines" 
                        className='vaccineDropDown'
                        id="vaccineName" 
                        value={form.vaccineName}
                        onChange={(e) => updateForm({ vaccineName: e.target.value })}
                    >
                            <option value="">Select the vaccine to record</option>
                            <option value="covid">Covid</option>
                            <option value="dengue">Dengue</option>
                            <option value="diptheria">DTaP (Diptheria, Tetanus, & Accellular Pertussis)</option>
                            <option value="flu">Influenza</option>
                            <option value="hepatitisA">Hepatitis A</option>
                            <option value="hepatitisB">Hepatitis B</option>
                            <option value="hpv">HPV (Human Paillomavirus)</option>
                            <option value="measles">MMR (Measles, Mumps, Rubella)</option>
                            <option value="meningococcal">Meningococcal</option>
                            <option value="pneumococcal">Pneumococcal</option>
                            <option value="poliovirus">Inactivated Poliovirus</option>
                            <option value="rotavirus">Rotavirus</option>
                            <option value="tuberculosis">Tuberculosis</option>
                            <option value="varicella">Varicella</option>
                            <option value="zoster">Zoster</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="dateGiven">Date Given</label>
                    <input 
                        type="date" 
                        className="form-control form-input" 
                        id="dateGiven" 
                        value={form.dateGiven}
                        onChange={(e) => updateForm({ dateGiven: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dose">Dose</label>
                    <select 
                        className='dose'
                        name="dose" 
                        id="dose" 
                        value={form.dose}
                        onChange={(e) => updateForm({ dose: e.target.value })}
                    >
                            <option value="">Select the dosage given</option>
                            <option value="oneOfOne">One of One</option>
                            <option value="oneOfTwo">One of Two</option>
                            <option value="oneOfThree">One of Three</option>
                            <option value="twoOfTwo">Two of Two</option>
                            <option value="twoOfThree">Two of Three</option>
                            <option value="threeOfThree">Three of Three</option>
                            <option value="booster">Booster</option>
                    </select>                    
                </div>
                <div className="form-group">
                    <label htmlFor="expiration">Expiration</label>
                    <input 
                        type="date" 
                        className="form-control form-input"
                        id="expiration" 
                        value={form.expiration}
                        onChange={(e) => updateForm({ expiration: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="effect-1"
                        id="manufacturer"
                        placeholder="Manufacturer"
                        value={form.manufacturer}
                        onChange={(e) => updateForm({ manufacturer: e.target.value })}
                    />
                </div>
                <div className="form-group">

                    <input
                        type="text"
                        className="effect-1"
                        id="medicalProfessional"
                        placeholder="Medical Professional Administering Vaccine"
                        value={form.medicalProfessional}
                        onChange={(e) => updateForm({ medicalProfessional: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="effect-1"
                        id="frequency"
                        value={form.frequency}
                        onChange={(e) => updateForm({ frequency: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    
                    <input
                        type="text"
                        className="effect-1"
                        id="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={(e) => updateForm({ description: e.target.value })}
                        />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create Vaccine Record"
                        className="btn btn-primary"
                    />
                </div>
                <div>
                <button className="btn btn-outline-info" onClick={navigateToVaccineList}>Back To Vaccine List</button>
                <Routes>
                    <Route path="/vaccineList" element={<VaccineList />} />
                </Routes>
            </div>
            </form>
            
        </div>
    );
}