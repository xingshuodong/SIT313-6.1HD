import React, { useState } from 'react';
import './table.css';
import Freelance from './freelance';
import Employment from './employment';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Table() {
    const [jobType, setJobType] = useState('');
    const [freelanceData, setFreelanceData] = useState({ title: '' });
    const [employmentData, setEmploymentData] = useState({ title: '' });
    const [image, setImage] = useState(null);

    const handleJobTypeChange = (event) => {
        setJobType(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result); // This will be the Base64 string
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formData = {};
        if (jobType === 'freelance') {
            formData = freelanceData;
        } else if (jobType === 'employment') {
            formData = employmentData;
        }

        formData.jobType = jobType;
        formData.imageBase64 = image; // Storing the Base64 string

        try {
            const docRef = await addDoc(collection(db, "jobs"), formData);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h4 className="main-title">New Job Form</h4>
                    <span>Select Job Type:</span>
                    <input type="radio" name="jobType" value="freelance" checked={jobType === 'freelance'} onChange={handleJobTypeChange} />
                    <label>Freelance</label>
                    <input type="radio" name="jobType" value="employment" checked={jobType === 'employment'} onChange={handleJobTypeChange} />
                    <label>Employment</label>
                </div>
                <div>
                    <label>Upload Image:</label>
                    <input type="file" onChange={handleImageChange} />
                </div>
                {jobType === 'freelance' && <Freelance data={freelanceData} setData={setFreelanceData} />}
                {jobType === 'employment' && <Employment data={employmentData} setData={setEmploymentData} />}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Table;
