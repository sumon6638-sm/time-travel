import axios from 'axios';
import { useForm } from "react-hook-form";
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { data } from 'autoprefixer';

const Booking = () => {

    const { user } = useAuth();

    const { booking } = useParams();

    const [packages, setPackage] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${booking}`)
            .then(res => res.json())
            .then(data => setPackage(data));
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'pending'
        console.log(data);

        axios.post('http://localhost:5000/booked', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booked Successfully!');
                    reset();
                    // window.location.reload();
                }
            })
    };

    return (
        <div className="container">
            <div className='shadow-lg my-4 mx-2'>
                <img className='card-img-top img-fluid' style={{ height: "400px", width: '' }} src={packages.img} alt="" />
                <div className="card-body">
                    <h3 className="card-title fw-bold text-center">{packages.name}</h3>
                    <p className="card-text">{packages.description}</p>
                    <p className="card-text"><small className="text-muted fw-bold">Total Cost: ${packages.price}</small></p>
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
                <form onSubmit={handleSubmit(onSubmit)} className="row g-3 mt-3 px-3">
                    <div className="col-md-6">
                        <input type="hidden" {...register("name", { required: true, maxLength: 20 })} className="form-control" id="validationDefault01" defaultValue={user.displayName} required />
                    </div>

                    <div className="col-md-6">
                        <input type="hidden" {...register("package_id")} className="form-control text-danger fw-bold" id="validationDefault01" defaultValue={booking} required />
                    </div>

                    <div className="col-md-3">
                        <label for="validationDefault03" className="form-label">Phone Number</label>
                        <input type="number" {...register("phoneNumber")} className="form-control" id="validationDefault03" placeholder='01' required />
                    </div>
                    <div className="col-md-3">
                        <label for="validationDefault03" className="form-label">Date</label>
                        <input type="date" {...register("date")} className="form-control" id="validationDefault03" placeholder='01' required />
                    </div>
                    <div className="col-md-3">
                        <label for="validationDefault04" className="form-label">State</label>
                        <select {...register("city")} className="form-select" id="validationDefault04" required>
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
                        <label for="validationDefault05" className="form-label">Area</label>
                        <input type="text" {...register("area")} className="form-control" id="validationDefault05" required />
                    </div>
                    <div className="col-md-12">
                        <input type="hidden" {...register("email")} className="form-control" id="validationDefault06" defaultValue={user.email} required />
                    </div>
                    <div className="col-md-12">
                        <label for="validationDefault05" className="form-label">Ask Anything?</label>
                        <textarea {...register("question")} className='w-100' name="" id="" rows="10"></textarea>
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
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;