import React, { useState, useEffect } from 'react';
import Table from '../components/table';
import JobCard from '../components/JobCard';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
function FindJob() {
    const [showTable, setShowTable] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    useEffect(() => {
        const fetchJobs = async () => {
            const jobCollection = collection(db, 'jobs');
            const jobSnapshot = await getDocs(jobCollection);
            const jobList = jobSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setJobs(jobList);
        };

        fetchJobs();
    }, []);

    const handleDelete = async (id) => {
        const jobRef = doc(db, 'jobs', id);
        try {
            await deleteDoc(jobRef);
            setJobs(prevJobs => prevJobs.filter(job => job.id !== id));
        } catch (error) {
            console.error("Error deleting job: ", error);
        }
    };

    const filteredJobs = jobs.filter(job => {
        if (searchKeyword) {
            return job.skills.toLowerCase().includes(searchKeyword) || job.jobPosition.toLowerCase().includes(searchKeyword);
        }
        return true;
    });

    return (
        <div>
            <button onClick={() => setShowTable(true)}>Create Job</button>
            {showTable && (
                <div className="popup">
                    <button className="close-button" onClick={() => setShowTable(false)}></button>
                    <Table />
                </div>
            )}
            <input
                type="text"
                placeholder="Search by skill or job title..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value.toLowerCase())}
            />

            <div className="job-list">
                {filteredJobs.map(job => (
                    <JobCard key={job.id} job={job} onDelete={handleDelete} />
                ))}
            </div>


        </div>
    );
}

export default FindJob;
