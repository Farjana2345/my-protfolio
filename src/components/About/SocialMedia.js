import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialMedia = () => {
    return (
        <div style={{color:'#659dbd'}} className="mt-4">
            <h4>FIND ME ON</h4>
            <p>Feel free to <span style={{color:'#ba6ac8'}}>connect</span> with me</p>
            <div style={{color:'#659dbd'}} className="icon">
            <a className="navbar-brand" href="https://github.com/Farjana2345"><FontAwesomeIcon style={{borderRadius:'25px', fontSize:'35px',padding:'4px',backgroundColor:'white',color:'#659dbd'}} className=""icon={faGithub} /></a>   
            <a className="navbar-brand" href="https://twitter.com/ShimuFarjana"> <FontAwesomeIcon style={{borderRadius:'25px',padding:'4px',backgroundColor:'white',color:'#659dbd'}} className=" fs-2" icon={faTwitter} /></a>
            <a className="navbar-brand" href="https://www.linkedin.com/in/shimu-farjana/"><FontAwesomeIcon style={{borderRadius:'23px',padding:'4px',backgroundColor:'white',color:'#659dbd'}} className="fs-2" icon={faLinkedin} /></a>
            <a className="navbar-brand" href="https://www.instagram.com/shimu_faarjana/"><FontAwesomeIcon style={{borderRadius:'25px',padding:'4px',backgroundColor:'white',color:'#659dbd'}} className="fs-2" icon={faInstagram} /></a>
            <a className="navbar-brand" href="https://www.facebook.com/profile.php?id=100009126902776"><FontAwesomeIcon style={{borderRadius:'25px',padding:'4px',backgroundColor:'white',color:'#659dbd'}} className="fs-2" icon={faFacebook} /></a>
            </div>
        </div>
    );
};

export default SocialMedia;