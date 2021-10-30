import React from 'react';

const Blog = (props) => {

    const {name, title, comment, img} = props.blog;

    return (
        <div className="card mb-3 shadow h-100">
            <div class="row g-0 bg-dark">
                <div class="col-md-7 col-sm-12">
                    <div class="card-body ms-3">
                        <h5 class="card-title text-warning">{name}</h5>
                        <p class="card-text text-white">{title}</p>
                        <p class="card-text"><small class="text-success fw-bold fs-6"><i class="fas fa-envelope-open-text"></i>  {comment} Message</small></p>
                    </div>
                    <button className='btn btn-outline-warning m-3 ms-4'>Read More</button>
                </div>
                <div class="col-md-5 col-sm-12">
                    <img src={img} class="img-fluid rounded-circle my-3" style={{height:'200px', width:'200px'}} alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Blog;