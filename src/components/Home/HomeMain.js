import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Home from './Home';

const HomeMain = () => {
    return (
        <div style={{backgroundColor:'#FAF0DC'}}> 
            <Home></Home>
            <About></About>
            <Project></Project>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default HomeMain;