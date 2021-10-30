import React from 'react';

const Guide = (props) => {
    const { name, img, position} = props.guide;

    return (
        <div className="col">
            <div className='card h-100 shadow-lg'>
                <img src={img} class="card-img-top img-fluid mx-auto rounded-circle mt-3" style={{ width: "120px" }} alt="..." />
                <div class="card-body h-100">
                    <h5 class="card-title text-center fw-bold text-primary">{name}</h5>
                    <hr className='w-50 mx-auto' />
                    <p class="card-text text-center">{position}</p>
                </div>
            </div>
        </div>
    );
};

export default Guide;