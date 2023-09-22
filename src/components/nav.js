import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import './nav.css';

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();

        auth.signOut()
            .then(() => {
                setUser(null);
            }).catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-brand">
                    DevLink Marketplace
                </Link>
            </div>
            <div className="navbar-right">
                {user ? (
                    <>
                        <span className="navbar-link">{user.email}</span>
                        <Link to="/" className="navbar-link">Dev</Link>
                        <Link to="/findjob" className="navbar-link">Find Jobs</Link>
                        <Link to="#" onClick={handleLogout} className="navbar-link">Logout</Link> 
                    </>
                ) : (
                    <>
                        <Link to="/login" className="navbar-link">Login</Link>
                        <Link to="/signup" className="navbar-link">Create Account</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
