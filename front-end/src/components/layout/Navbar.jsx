import React from 'react';
import { Link } from 'react-router-dom';
import LandingPageLinks from './LandingPageLinks';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <Link to="/" className="navbar-brand">DesignHub BETA</Link>
                <LandingPageLinks />
            </div>
        </nav>
    );
}

export default Navbar;
