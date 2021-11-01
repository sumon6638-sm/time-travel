import React from 'react';
// import { Item } from './yourItem';

const ShowTraveller = (props) => {
    const { name, description, img } = props.traveller
    
    return (
        <div className="col">
            <div className='card h-100 shadow'>
                <img src={img} class="card-img-top img-fluid mx-auto rounded-circle mt-3" style={{width:"80px", height:"120px"}} alt="..." />
                <div class="card-body h-100">
                    <h5 class="card-title text-center fw-bold text-primary">{name}</h5>
                    <hr className='w-50 mx-auto'/>
                    <p class="card-text text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowTraveller;