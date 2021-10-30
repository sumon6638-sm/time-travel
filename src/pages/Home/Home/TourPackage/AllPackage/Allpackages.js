import React, { useEffect, useState } from 'react';
import TourPackage from './TourPackage';

const Allpackages = () => {

    const [tourPackages, setTourPackages] = useState([]);


    useEffect(() => {
        fetch('./packageTravel.json')
            .then(res => res.json())
            .then(data => setTourPackages(data));
    }, [])

    return (
        <div>
            <div className="my-5">
                <h2 className='text-center' style={{ fontFamily: "Fruktur" }}>OUR AWESOME TOUR PACKAGES</h2>
                <hr className='w-25 mx-auto' />
                <div className=''>
                    {
                        tourPackages.map(tour =>
                            <TourPackage
                                key={tour.id}
                                tour={tour}
                            ></TourPackage>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Allpackages;