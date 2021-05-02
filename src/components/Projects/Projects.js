import React from 'react';
import './Projects.css';
const Projects = (props) => {
    const{img,title,description,website,github}=props.project;
    return (
        
            <div className="col-md-4 mt-5 text-center d-flex justify-content-center">
                <div className="project shadow bg-body rounded">
                    <img style={{width:'350px'}} src={img} alt=""/>
                    <h5 className="text-center mt-5">{title}</h5>
                    <p>{description}</p>
                    <a className="navbar-brand" href={website}><button style={{backgroundColor:'#659dbd',border:'none',padding:'10px 25px',borderRadius:'25px',color:'white',fontWeight:'bold'}} className="mt-4">Website</button></a>
                    <a className="navbar-brand" href={github}><button style={{backgroundColor:'#659dbd',border:'none',padding:'10px 25px',borderRadius:'25px',color:'white',fontWeight:'bold'}} className="mt-4">Github</button></a>
                </div>
            </div>
        
    );
};

export default Projects;