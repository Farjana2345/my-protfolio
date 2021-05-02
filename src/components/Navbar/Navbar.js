import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white"> 
            <div className="container">
                <Link style={{color:'#ba6ac8',fontWeight:'bold'}} className="navbar-brand" to="/home"><h3>SHIMU</h3></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link style={{color:'#659dbd',fontWeight:'bold'}} className="nav-link active me-4" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color:'#659dbd',fontWeight:'bold'}} className="nav-link me-4" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color:'#659dbd',fontWeight:'bold'}} className="nav-link me-4" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color:'#659dbd',fontWeight:'bold'}} className="nav-link me-4" to="/project">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color:'#659dbd',fontWeight:'bold'}} className="nav-link me-4" to="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color:'#659dbd',fontWeight:'bold'}} className="nav-link me-4" to="#">Resume</Link>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
    );
};

export default Navbar;