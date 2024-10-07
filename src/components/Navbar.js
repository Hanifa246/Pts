import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Placement Interaction System</h1>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>

                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
