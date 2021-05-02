import React from 'react';
import Type from './Type';
import homeLogo from '../../images/home-main.svg'
import Particle from '../Particle/Particle';
const Home = () => {
    return (
        <div className="container">
           <div style={{position:'absolute'}} className="particle">
                <Particle></Particle>
           </div>
            <div style={{position:'relative'}} className="row mt-5 pt-5">
                <div className="col-md-7">
                    <h1  style={{paddingBottom: 15,color:'#659dbd'}} className="heading">Hello</h1>
                    <h1  style={{color:'#659dbd'}}className="heading-name">I'M<strong style={{color:'#ba6ac8'}} className="main-name"> FARJANA SHIMU</strong></h1>
                    <div className="mt-5" style={{fontSize:"30px",textAlign:"left",color:'salmon'}}>
                        <Type/>
                    </div>
                    <a className="navbar-brand" href="https://drive.google.com/file/d/1wRYbgrY_RFn6ue2vV-g3bTh08j5bIA-z/view?usp=sharing"><button style={{backgroundColor:'#41b3a3',border:'none',padding:'10px 25px',borderRadius:'25px',color:'white'}} className="mt-4 fw-bold">Download CV</button></a>
                </div>
                <div className="col-md-5">
                <img src={homeLogo} alt="home pic" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default Home;