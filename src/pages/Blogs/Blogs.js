import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from './Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    
    return (
        <div className='container'>
            <div className="my-5">
                <h2 className='text-center' style={{ fontFamily: "Fruktur" }}>OUR BLOGS</h2>
                <hr className='w-25 mx-auto' />
                <div className=''>
                    {
                        blogs.map(blog =>
                            <Blog
                                key={blog.id}
                                blog={blog}
                            ></Blog>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;