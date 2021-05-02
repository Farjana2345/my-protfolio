import React from 'react';
import shimu from '../../images/shimu.jpg'
import SocialMedia from './SocialMedia';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    return (
    <div className="container">
        <div className="row mt-5 pt-5">
            <div className="col-md-6">
             <div className="container">
            <div className="about-area">
                 <div className="image-area">
              <img style={{borderRadius:"50%",width:"350px",height:"350px"}} src={shimu} alt="home pic" className="img-fluid"/>
                </div>
                <div className="about-details">
                   <h2>Farjana Akter Shimu</h2>
                     <h5>Jr. Web Developer | Engineer</h5>
                   <p>I'm Farjana-a Frontend Developer.Self-motivated and hardworking<br/>seeking an opportunity to work in a challenging environment to <br/> prove my skills and utilize my knowledge  intelligence in the <br/> growth of the organization as a web developer.</p>
            </div> 
           </div>
         </div>
            </div>
        <div className="col-md-6 d-flex justify-content-center">

        <div>
            <h1 style={{borderBottom:'5px solid salmon'}}>Skills</h1>
            <p className="mt-4">
                <a style={{color:'salmon'}} className="btn fs-5 fw-bold" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                <FontAwesomeIcon style={{color:'#659dbd'}}  icon={faPlus}></FontAwesomeIcon> Specializations
                </a> <br/>
                <div className="collapse" id="collapseExample1">
                    <div style={{color:'#659dbd'}} className="card card-body">
                        HTML, CSS, Bootstrap, JavaScript, React js,material ui
                    </div>
                </div>
                <button style={{color:'salmon'}} className="btn fs-5 fw-bold" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                <FontAwesomeIcon style={{color:'#659dbd'}} icon={faPlus}></FontAwesomeIcon> Porgramming Languages 
                </button><br/>
                <div className="collapse" id="collapseExample2">
                    <div style={{color:'#659dbd'}} className="card card-body">
                        C, C++, JavaScript, React js,nodejs 
                    </div>
                </div>
                <button  style={{color:'salmon'}} className="btn fs-5 fw-bold" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                <FontAwesomeIcon style={{color:'#659dbd'}} icon={faPlus}></FontAwesomeIcon> Familiar 
                </button> <br/>
                <div className="collapse" id="collapseExample3">
                    <div style={{color:'#659dbd'}} className="card card-body">
                        firebase,node js,MySQL,mongodb,nodejs
                    </div>
                </div>
                <button style={{color:'salmon'}} className="btn fs-5 fw-bold" type="button" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                <FontAwesomeIcon style={{color:'#659dbd'}} icon={faPlus}></FontAwesomeIcon> Deploy
                </button><br/>
                <div className="collapse" id="collapseExample4">
                    <div style={{color:'#659dbd'}} className="card card-body">
                    firebase,netlify,heroku 
                    </div>
                </div>
                <button style={{color:'salmon'}} className="btn fs-5 fw-bold" type="button" data-toggle="collapse" data-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                <FontAwesomeIcon style={{color:'#659dbd'}} icon={faPlus}></FontAwesomeIcon>Tools and Applications
                </button><br/>
                <div className="collapse" id="collapseExample5">
                    <div style={{color:'#659dbd'}} className="card card-body">
                    VSCode,Sublime,Notepad++, Dev Tool, Co Adobe Photoshop, Git,heroku,netlify 
                    </div>
                </div>
            </p>
            <div className="text-white text-center mt-5">
                   <SocialMedia></SocialMedia>
               </div>
        </div>

        </div>
        </div>
    </div>



    );
};

export default About;