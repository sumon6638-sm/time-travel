import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {

    const { booking } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/packageTravel.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    const pakage = data.filter(find=>find.id === booking)

    return (
        <div className="container">
            <div className='shadow-lg my-4 mx-2'>
                <img className='card-img-top img-fluid' style={{ height: "400px", width: '' }} src={pakage[0]?.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-center">{pakage[0]?.title}</h5>
                    <p className="card-text">{pakage[0]?.description}</p>
                    <p className="card-text"><small className="text-muted fw-bold">Total Cost: ${pakage[0]?.price}</small></p>
                </div>

                <div className="text-center pb-4">
                    <Link to='/tourpackage'>
                        <button className='btn btn-danger'>All Packages</button>
                    </Link>
                </div>
            </div>

            <div className='container card shadow my-5 py-5 get-in-touch'>
                <h2 className='fw-bold text-center'>Book Early...</h2>
                <h4 className='text-center'>Otherwise you will miss this awesome tour...</h4>
                <form className="row g-3 mt-3 px-3">
                    <div className="col-md-6">
                        <label for="validationDefault01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Md." required />
                    </div>
                    <div className="col-md-6">
                        <label for="validationDefault02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Sumon" required />
                    </div>
                    

                    <div className="col-md-6">
                        <label for="validationDefault03" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="validationDefault03" placeholder='01' required />
                    </div>
                    <div className="col-md-3">
                        <label for="validationDefault04" className="form-label">State</label>
                        <select className="form-select" id="validationDefault04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Dhaka</option>
                            <option>Chittagong</option>
                            <option>Rajshahi</option>
                            <option>Cumilla</option>
                            <option>Barishal</option>
                            <option>Dinajpur</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label for="validationDefault05" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="validationDefault05" required />
                    </div>
                    <div className="col-md-12">
                        <label for="validationDefault05" className="form-label">Your Email</label>
                        <input type="email" className="form-control" id="validationDefault06" placeholder='@gmail.com' required />
                    </div>
                    <div className="col-md-12">
                        <label for="validationDefault05" className="form-label">Ask Anything?</label>
                        <textarea className='w-100' name="" id="" rows="10"></textarea>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                            <label className="form-check-label" for="invalidCheck2">
                                Agree to terms and conditions
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;