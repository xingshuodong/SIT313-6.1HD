import React from 'react';
import './Card.css';

const Card = (props) => {
    const isFreelancer = props.type === 'freelancer';
    return (
        <div className={`column ${props.positionClass}`}>
            <div className="avatar-container">
                <img src={props.avatar} alt={isFreelancer ? "freelancer" : "customer"} className="avatar" />
            </div>
            <h3>{props.name}</h3>
            <p>{props.position}</p>
            <p>{isFreelancer ? "Freelancer" : "Customer"}</p>

        </div>

    );
};

export default Card;
