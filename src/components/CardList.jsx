import React from 'react';
import Card from './Card';
import './Card.css';

const CardList = ({ cardData }) => {
    return (
        <div className="row">
            {cardData.map((card) => (
                <Card
                    key={card.key}
                    avatar={card.avatar}
                    name={card.name}
                    position={card.position}
                    positionClass={card.positionClass}
                    type={card.type}
                />
            ))}
        </div>
    );
};

export default CardList;
