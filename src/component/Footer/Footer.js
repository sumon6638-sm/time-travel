import React from 'react';
import MapDirection from '../../pages/Contact/MapDirection';

const Footer = () => {
    return (
        <div className='bg-dark py-5'>
            <div className="row mx-3">
                <div className="col-md-3">
                    <h2 className='text-warning'>CONNECTED WITH US</h2>
                    <div className="mt-2">
                        <div className="text-center">
                            <img className='img-fluid' style={{ height: '100px' }} src="./logo.png" alt="" />
                        </div>
                        <p className='text-light'><i className="fas fa-map-marker-alt text-light"></i> 7-14, Nikunja Housing Society South Khulshi, Chittagong</p>

                        <p className='text-light'><i className="fas fa-phone-volume"></i> 88 031-2869877 , 88 031-2869899</p>
                        <p className='text-light'><i className="fas fa-envelope-open"></i> mdsumoncse19@gmail.com</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <h3 className='text-start text-warning'>USEFUL LINKS</h3>
                    <div className="text-light text-start">
                        <li className='my-3'>Bangladesh University</li>
                        <li className='my-3'>Ministry Of Education</li>
                        <li className='my-3'>Education Board Bangladesh</li>
                        <li className='my-3'>Government Of Bangladesh</li>
                        <li className='my-3'>World Health Organizaiton</li>
                    </div>
                </div>

                <div className="col-md-6 connect">
                    <h3 className='text-warning'>Stay Connected</h3>
                    <MapDirection></MapDirection>
                </div>
            </div>

            <h6 className='text-warning mt-5 mb-0 py-5 text-center'>© All Right Reserved Update Tech 2021</h6>
        </div>
    );
};

export default Footer;
