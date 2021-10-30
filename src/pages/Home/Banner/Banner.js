import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.ibb.co/4fDXzBG/banner2.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block text-dark">
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="https://i.ibb.co/zN04sm3/banner1.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block bg-dark mb-2 rounded">
                        <h4 className='text-white px-2'>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</h4>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="https://i.ibb.co/bWR7fCz/banner3.png" className="d-block w-100" alt="..." />
                    {/* <div className="carousel-caption d-none d-md-block text-warning mb-5 ms-5 bg-success rounded mb-5">
                        <h4>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</h4>
                    </div> */}
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;