import React, { useEffect, useState } from 'react';
import ShowTourPackage from './ShowTourPackage';
import "react-multi-carousel/lib/styles.css";
import ShowTraveller from './ShowTraveller';
import ShowBlog from './ShowBlog';


const TourPackages = () => {

    const [tourPackages, setTourPackages] = useState([]);

    const [travellers, setTravellers] = useState([]);

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./packageTravel.json')
            .then(res => res.json())
            .then(data => setTourPackages(data));
    },[])

    useEffect(() => {
        fetch('./travellers.json')
            .then(res => res.json())
            .then(data => setTravellers(data));
    },[])

    useEffect(() => {
        fetch('./blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    },[])

    return (
        <div className="container">
            <div className="my-5">
                <h2 className='text-center' style={{ fontFamily: "Fruktur" }}>OUR AWESOME TOUR PACKAGES</h2>
                <hr className='w-25 mx-auto' />
                <div className=''>
                    {
                        tourPackages.slice(0, 6).map(tourPackage =>
                            <ShowTourPackage
                                key={tourPackage.id}
                                tourPackage={tourPackage}
                            ></ShowTourPackage>
                        )
                    }
                </div>
            </div>

            <div className="my-5">
                <h2 className='text-center' style={{ fontFamily: "Fruktur" }}>WHAT OUR TRAVELLER SAY ABOUT US</h2>
                <hr className='w-25 mx-auto' />
                
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        travellers.map(traveller =>
                            <ShowTraveller
                                key={traveller.rank}
                                traveller={traveller}
                            ></ShowTraveller>
                        )
                    }
                </div>
            </div>

            <div className="my-5">
                <h2 className='text-center' style={{ fontFamily: "Fruktur" }}>OUT BLOG</h2>
                <hr className='w-25 mx-auto' />

                <div className="row">
                    {
                        blogs.map(blog =>
                            <ShowBlog
                                key={blog.id}
                                blog={blog}
                            ></ShowBlog>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TourPackages;