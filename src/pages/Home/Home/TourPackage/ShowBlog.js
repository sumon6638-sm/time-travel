import React from 'react';

const ShowBlog = (props) => {
    const { name, title, comment, img } = props.blog;

    return (
        <div class="card col-md-6 col-sm-12 mb-3 g-0">
            <div class="row g-0 bg-dark">
                <div class="col-md-7 col-sm-12">
                    <div class="card-body">
                        <h5 class="card-title text-warning">{name}</h5>
                        <p class="card-text text-white">{title}</p>
                        <p class="card-text"><small class="text-success fw-bold fs-6"><i class="fas fa-envelope-open-text"></i>  {comment} Message</small></p>
                    </div>
                    <button className='btn btn-outline-warning m-3'>Read More</button>
                </div>
                <div class="col-md-5 col-sm-12">
                    <img src={img} class="img-fluid rounded-start" style={{ height: '300px' }} alt="..." />
                </div>
            </div>
        </div>
    );
};

export default ShowBlog;