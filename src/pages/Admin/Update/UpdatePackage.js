import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdatePackage = () => {
    const { id } = useParams();

    const [tour, setTour] = useState([]);

    useEffect(() => {
        fetch(`https://bloodcurdling-cheateau-92804.herokuapp.com/packages/${id}`)
            .then(res => res.json())
            .then(data => setTour(data));
    }, [])

    return (
        <div className='container'>
            <h2>The tour of: {tour.name}</h2>
            <p><small>{id}</small></p>
        </div>
    );
};

export default UpdatePackage;