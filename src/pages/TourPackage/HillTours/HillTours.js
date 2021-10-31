import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HillTour from './HillTour';

const HillTours = () => {

    const [hillTours, setHillTours] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setHillTours(data));
    },[])

    return (
        <div className='container'>
            <div className="my-5">
                <h2 className='text-center' style={{ fontFamily: "Fruktur" }}>OUR AWESOME ALL HILL TOUR PACKAGES</h2>
                <hr className='w-25 mx-auto' />
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        hillTours.slice(0, 8).map(hillTour =>
                            <HillTour
                                key={hillTour._id}
                                hillTour={hillTour}
                            ></HillTour>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HillTours;