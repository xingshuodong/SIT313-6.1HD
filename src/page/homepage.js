import React from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import { freelancerList, customerList } from '../components/staffList';

const HomePage = () => {
    return (
        <div>
            <Header text="Staff List" />
            <div className="card-section">
                <h2>Freelancers</h2>
                <CardList cardData={freelancerList} />
            </div>
            <div className="card-section">
                <h2>Customers</h2>
                <CardList cardData={customerList} />
                <div className="button">
                </div>
            </div>
        </div>
    );
};

export default HomePage;
