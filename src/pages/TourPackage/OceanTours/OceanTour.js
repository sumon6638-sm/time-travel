import React from 'react';
import { Link } from 'react-router-dom';

const OceanTour = (props) => {

    const { _id, name, price, duration, description, img } = props.oceanTour

    const dynamicUrl = `/tourPackage/${_id}`

    return (
        <div class="col">
            <div class="card h-100 shadow">
                <img src={img} class="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <Link to={dynamicUrl}><button className='btn btn-success text-warning fw-bold'><i class="fas fa-check-circle"></i> Book Now</button></Link>
                </div>
                <div class="card-footer">
                    <div className='text-start'>
                        <small class="text-muted">Duration: {duration} days / {duration - 1} night</small>
                    </div>
                    <div className='text-end'>
                        <small class="fw-bold">Cost: ${price}/person</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OceanTour;