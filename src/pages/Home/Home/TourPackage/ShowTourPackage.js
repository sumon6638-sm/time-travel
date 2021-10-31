import React from 'react';
import { Link } from 'react-router-dom';

const ShowTourPackage = ({ tourPackage }) => {
    const { _id, name, price, duration, description, img } = tourPackage

    const dynamicUrl = `/tourPackage/${_id}`

    return (
        <div className="card mb-3 shadow">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={img} class="img-fluid rounded-start h-100 w-100" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title fw-bold text-success">{name}</h5>
                        <p class="card-text">{description}</p>
                        <h2>${price} <span className='text-muted fs-6'>/per person</span> </h2>
                        <p class="card-text"><small class="text-muted">{duration}</small></p>
                        <Link to={dynamicUrl}><button className='btn btn-success text-warning fw-bold'><i class="fas fa-check-circle"></i> Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowTourPackage;