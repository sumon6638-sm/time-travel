import React, { useEffect, useState } from 'react';

const ViewOrder = (props) => {
    const { package_id } = props.order;

    const [order, setOrder] = useState([])
    
    useEffect(() => {
        fetch(`https://bloodcurdling-cheateau-92804.herokuapp.com/packages/${package_id}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    },[])

    return (
        <div className="card mb-3 shadow">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={order.img} class="img-fluid rounded-start h-100 w-100" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title fw-bold text-success">{order.name}</h5>
                        <p class="card-text">{order.description}</p>
                        <h2>${order.price} <span className='text-muted fs-6'>/per person</span> </h2>
                        <p class="card-text"><small class="text-muted">{order.duration} days / {order.duration-1} night</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewOrder;