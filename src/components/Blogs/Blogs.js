import React from 'react';
import html from '../../images/html-css.jpg';
import router from '../../images/router.png';
import Blog from './Blog';
const blogs = [
    {
        id:1,
        description: 'How to make website with HTML CSS',
        img:html,
        blog:'https://phrase.com/blog/posts/becoming-the-first-female-developer-at-phrase/'
       
    },
    {
        id:2,
        description: 'How to use React Router',
        img:router,
        blogs:'https://phrase.com/blog/posts/becoming-the-first-female-developer-at-phrase/'
    },
    {
        id:3,
        description: 'How to use React Router',
        img:router,
        blogs:'https://phrase.com/blog/posts/becoming-the-first-female-developer-at-phrase/'
        
    }
    
]
const Blogs = () => {
    return (
        <div className="container">
            <div className="text text-center mt-5 pt-5">
                <h1 style={{padding:'10px',fontWeight:'bold'}}>My Blogs</h1>
            </div>
           <div className="row mt-5">
               {
                   blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
               }
            </div> 
        </div>
    );
};

export default Blogs;