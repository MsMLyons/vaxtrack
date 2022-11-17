import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

export default function EditVaccine() {
    const [form, setForm] = useState({
        vaccineName: '',
        dateGiven: '',
        dose: '',
        expiration: '',            
        manufacturer: '',
        medicalProfessional: '',
        frequency: '',
        description: '',
        vaccines: [],
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`http://localhost:5000/vaccine/${params.id.toString()}`);

            if (!response.ok) {
                const message = `An error has occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const vaccine = await response.json();
            if (!vaccine) {
                window.alert(`Vaccine with id ${id} not found`);
                navigate('/');
                return;
            }

            setForm(vaccine);
        }

        fetchData();

        return;
    }, [params.id, navigate]);

    // update state properties
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const editedVaccine = {
            vaccineName: form.vaccineName,
            dateGiven: form.dateGiven,
            dose: form.dose,
            expiration: form.expiration,            
            manufacturer: form.manufacturer,
            medicalProfessional: form.medicalProfessional,
            frequency: form.frequency,
            description: form.description,
        };

        await fetch(`http://localhost:5000/update/${params.id}`, {
            method: 'POST',
            body: JSON.stringify(editedVaccine),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        navigate('/'); // change navigation link if necessary
    }

    return (
        <div> 
            <h3>Update Vaccine Record</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="vaccineName">Vaccine Name</label>
                    <select 
                        name="vaccines" 
                        id="vaccineName" 
                        value={form.vaccineName}
                        onChange={(e) => updateForm({ vaccineName: e.target.value })}
                    >
                            <option value="">Select the vaccine to record</option>
                            <option value="covid">Covid</option>
                            <option value="diptheria">Diptheria</option>
                            <option value="flu">Flu</option>
                            <option value="hepatitis">Hepatitis</option>
                            <option value="measles">Measles</option>
                            <option value="tuberculosis">Tuberculosis</option>
                            <option value="varicella">Varicella</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="dateGiven">Date Given</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="dateGiven" 
                        value={form.dateGiven}
                        onChange={(e) => updateForm({ dateGiven: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dose">Dose</label>
                    <select 
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
                        className="form-control" 
                        id="expiration" 
                        value={form.expiration}
                        onChange={(e) => updateForm({ expiration: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="manufacturer">Manufacturer</label>
                    <input
                        type="text"
                        className="form-control"
                        id="manufacturer"
                        value={form.manufacturer}
                        onChange={(e) => updateForm({ manufacturer: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="medicalProfessional">Medical Professional</label>
                    <input
                        type="text"
                        className="form-control"
                        id="medicalProfessional"
                        value={form.medicalProfessional}
                        onChange={(e) => updateForm({ medicalProfessional: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="frequency">Frequency</label> 
                    <input
                        type="text"
                        className="form-control"
                        id="frequency"
                        value={form.frequency}
                        onChange={(e) => updateForm({ frequency: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
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
            </form>
        </div>
    );    
}