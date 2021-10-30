import React from 'react';

const About = () => {
    return (
        <div>
            <div className="">
                <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/single-girl-on-the-beach-sunset-razvan-ionut-dragomirescu.jpg" alt="" className='img-fluid w-100'/>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className='col-md-5'>
                        <img src="https://www.tourx-react.egenslab.com/static/media/about-1.bcfbc984.png" alt="" className='img-fluid h-100' />
                    </div>
                    <div className='col-md-7'>
                        <h2 className='fw-bold'>The Best Travel Agency Company</h2>
                        <p>Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris. Nunc nec ornare nisi, vel elementum est. Proin malesuada venenatis ex, eu fringilla justo scelerisque sit amet. Sed fringilla nec purus non venenatis. Aliquam nec turpis pharetra, bibendum lorem in, sollicitudin nibh. Nulla sit amet lacus diam.</p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h2 className='text-center fw-bold'>A Sample Video of Our Tour!!</h2>
                <iframe className='w-100' style={{height:'400px'}} src="https://www.youtube.com/embed/bAgkeogi_5E?start=57" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className='img-fluid' src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/09/clients-1.png" alt="" />

                        <img className='img-fluid' src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/09/clients-2.png" alt="" />

                        <img className='img-fluid' src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/09/clients-3.png" alt="" />

                        <img className='img-fluid' src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/09/clients-4.png" alt="" />

                        <img className='img-fluid' src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/09/clients-5.png" alt="" />

                        <img className='img-fluid' src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/09/clients-6.png" alt="" />

                        <img className='img-fluid' src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/09/clients-7.png" alt="" />

                        <img className='img-fluid' src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/09/clients-8.png" alt="" />
                    </div>

                    <div className="col-md-6">
                        <img className='img-fluid' src="https://i.ibb.co/DW769Mz/mypic.jpg" alt="" />
                        <h4 className='fw-bold'>"Take only memories, leave footprints..."</h4>
                        <p>By <span className='text-danger'>Rachel Jacobs</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;