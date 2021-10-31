import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageSinglePackage = (props) => {
    const { _id, name, img, price, duration, description } = props.tour

    const dynamicUrl = `/tourPackage/${_id}`

    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('https://bloodcurdling-cheateau-92804.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    })

    const handleDelete = id => {
        const url = `https://bloodcurdling-cheateau-92804.herokuapp.com/packages/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted Successfully');
                    window.location.reload();
                    const remaining = packages.filter(tour => tour._id !== id);
                    setPackages(remaining);
                }
            })
    }

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
                        <p class="card-text"><small class="text-muted">{duration} days / {duration - 1} night</small></p>
                        <Link to={dynamicUrl}><button className='btn btn-success text-warning fw-bold'><i class="fas fa-check-circle"></i> Book Now</button></Link>

                        <button className='btn btn-primary m-2'>Update</button>

                        <button onClick={()=> handleDelete(_id)} className="btn btn-danger fw-bold">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageSinglePackage;