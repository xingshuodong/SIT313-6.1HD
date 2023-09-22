import React, { useState } from 'react';
import './JobCard.css';

const JobCard = ({ job, onDelete }) => {
    const [expanded, setExpanded] = useState(false);

    const renderDescription = () => {
        if (!job.description || typeof job.description !== 'string') {
            return '';
        }
        return job.description.length > 100 ? job.description.substring(0, 100) + '...' : job.description;
    };

    return (
        <div className="job-card" onClick={() => setExpanded(!expanded)}>
            {expanded ? (
                <div>
                    <h3>{job.jobPosition}</h3>
                    <p><strong>Description:</strong> {job.jobDescription}</p>
                    <p><strong>Skills:</strong> {job.skills}</p>
                </div>
            ) : (
                    <div>
                        {job.imageBase64 && <img src={job.imageBase64} alt="Job Avatar" className="job-avatar" />}
                        <h3>{job.jobPosition}</h3>
                    <p>{renderDescription()}</p>
                </div>
            )}
            <button onClick={(e) => { e.stopPropagation(); onDelete(job.id); }}>Delete</button>
        </div>
    );
};

export default JobCard;
