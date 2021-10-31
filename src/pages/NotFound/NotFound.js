import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-black text-center'>
            <img className='img-fluid w-100 container' style={{ height: '100vh' }} src="https://i.gifer.com/2RNE.gif" alt="" />
            <div className='text-center'>
                <Link to='/'>
                    <button className='btn btn-success mb-5'>Go to HOME</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;