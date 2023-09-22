import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>About Us</h2>
                    <p>
                       TEST
                    </p>
                </div>
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p>Email: info@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <p>Facebook | Twitter | LinkedIn</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 DevLink Marketplace. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
