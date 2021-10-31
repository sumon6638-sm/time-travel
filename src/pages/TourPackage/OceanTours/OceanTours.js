import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import OceanTour from './OceanTour';

const OceanTours = () => {

    const [oceanTours, setOceanTours] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setOceanTours(data));
    },[])

    return (
        <div className='container'>
            <div className="my-5">
                <h2 className='text-center' style={{ fontFamily: "Fruktur" }}>OUR AWESOME ALL OCEAN TOUR PACKAGES</h2>
                <hr className='w-25 mx-auto' />
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        oceanTours.slice(8, ).map(oceanTour =>
                            <OceanTour
                                key={oceanTour.id}
                                oceanTour={oceanTour}
                            ></OceanTour>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default OceanTours;