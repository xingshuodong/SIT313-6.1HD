import './table.css';

function Employment({ data, setData }) {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="section-container">
            <h4 className="main-title">Describe Your Job (Position)</h4>
            <label>Job position</label>
            <input type="text" name="jobPosition" value={data.jobPosition || ''} onChange={handleInputChange} className="full-width" />
            <label>Job Description</label>
            <textarea name="jobDescription" value={data.jobDescription || ''} onChange={handleInputChange} className="full-width" style={{ minHeight: '100px' }} />
            <label>Skills</label>
            <input type="text" name="skills" value={data.skills || ''} onChange={handleInputChange} className="full-width" placeholder="Please add skills your job is required" />
            <p>"Developer will find ..."</p>
            <h4 className="main-title">Project Condition</h4>
            <input type="text" name="projectLength" value={data.projectLength || ''} onChange={handleInputChange} className="spaced-text-field full-width" placeholder="Project Length" />
            <input type="text" name="paymentMin" value={data.paymentMin || ''} onChange={handleInputChange} className="spaced-text-field full-width" placeholder="Payment (Min)" />
            <input type="text" name="paymentMax" value={data.paymentMax || ''} onChange={handleInputChange} className="spaced-text-field full-width" placeholder="Payment (Max)" />
            <input type="text" name="workingHours" value={data.workingHours || ''} onChange={handleInputChange} className="spaced-text-field full-width" placeholder="Working Hours" />
            <h4 className="main-title">Experience</h4>
            <input type="text" name="experienceIn" value={data.experienceIn || ''} onChange={handleInputChange} className="spaced-text-field full-width" placeholder="Experienced In" />
            <input type="text" name="experienceDuration" value={data.experienceDuration || ''} onChange={handleInputChange} className="spaced-text-field full-width" placeholder="For at Least" />
        </div>
    );
}

export default Employment;
