import React from 'react';
import logo from "../assets/react-logo.png";
const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="React Logo" style={{ width: '100px', height: 'auto' }} />
            <h3>React Facts</h3>
            <h4>React course - project 1</h4>

        </nav>
    );
};

export default Navbar;