import React from 'react';
import grocery from '../../images/grosery.png';
import car from '../../images/car.png';
import mobile from '../../images/mobile.png'
import team from '../../images/team.png';
import ema from '../../images/ema.png';
import queen from '../../images/queen.png'
import Projects from '../Projects/Projects';
const projects = [
    {
        id:1,
        title: 'Grosery Store',
        description: 'This website is about buy grocery items',
        img:grocery,
        github:'https://github.com/Farjana2345/grocery-store',
        website:'https://grosery-89c32.web.app/'
    },
    {
        id:2,
        title: 'Freedom Riders',
        description: 'A traveling freedom riders website',
        img:car,
        github:'https://github.com/Farjana2345/freedom-riders',
        website:'https://react-auth-84f42.web.app/'
    },
    {
        id:3,
        title: 'Catania Repair Services',
        description: ' A Catania mobile repair services website.',
        img:mobile,
        github:'https://github.com/Farjana2345/mobile-client',
        website:'https://mobile-b2b89.web.app/'
    },
    {
        id:4,
        title: 'Team Tracker',
        description: ' This project is about England soccer team',
        img:team,
        github:'https://github.com/Porgramming-Hero-web-course/react-router-Farjana2345',
        website:'https://eager-williams-d337c8.netlify.app/'
    },
    {
        id:5,
        title: 'Ema-john E-commerce',
        description: ' An e-commerce site like as amazon',
        img:ema,
        github:'https://github.com/Farjana2345/emma-john',
        website:'https://hungry-lamport-7a05a6.netlify.app/'
    },
    {
        id:6,
        title:'Cruise Queen',
        description: ' An e-commerce site like as amazon',
        img:queen,
        github:'https://github.com/Farjana2345/Cruise-Queen',
        website:'https://farjana2345.github.io/Cruise-Queen/'
    }
]
const Project = () => {
    return (
        <div className="container">
            <div className="text text-center mt-5 pt-5">
                <h1 style={{padding:'10px',fontWeight:'bold'}}>My Recent Project</h1>
            </div>
           <div className="row">
               {
                   projects.map(project=><Projects key={project.id} project={project}></Projects>)
               }
            </div>
            <div className="text-center">
                <a className="navbar-brand" href="https://github.com/Farjana2345"><button style={{backgroundColor:'#659dbd',border:'none',padding:'10px 25px',borderRadius:'25px',color:'white',fontWeight:'bold'}} className="mt-4">Explore more</button></a>
            </div> 
        </div>
    );
};

export default Project;