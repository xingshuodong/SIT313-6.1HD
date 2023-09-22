import React from 'react';

const SubscribeSection = () => {
    const handleSubmit = () => {
        console.log('Email submitted');
    };

    return (
        <div style={{ backgroundColor: 'lightgray', padding: '20px', display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, fontSize: '20px', fontWeight: 'bold' }}>
                SIGN UP WITH DAILY INSIDER
            </div>
            <input
                type="email"
                placeholder="input your email"
                style={{ flex: 1, padding: '10px', marginRight: '10px', maxWidth: '250px' }}
            />
            <button onClick={handleSubmit} style={{ padding: '10px 20px' }}>
                Submit
            </button>
        </div>
    );
};

export default SubscribeSection;
