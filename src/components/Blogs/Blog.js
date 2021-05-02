import React from 'react';
import './Blog.css';
const Blog = (props) => {
    const{img,description,blogs}=props.blog;
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="blog-area mt-2">
                <img style={{width:'350px'}} src={img} alt=""/>
                <p className="mt-2 fs-5">{description}</p>
                <a className="navbar-brand" href={blogs}><button style={{backgroundColor:'#659dbd',border:'none',padding:'10px 25px',borderRadius:'25px',color:'white',fontWeight:'bold'}} className="mt-4">Read More</button></a>
            </div>
        </div>
    );
};

export default Blog;