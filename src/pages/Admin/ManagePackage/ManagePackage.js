import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './ManagePackage.css'
import ManageSinglePackage from './ManageSinglePackage';

const ManagePackage = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully!');
                    reset();
                }
            })
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/packages/`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    
    return (
        <div className='container add-package'>
            <div className="card my-5 py-5 shadow">
                <h2 className='text-center text-success fw-bold'>Add a new tour package</h2>
                <hr className='w-25 mx-auto mb-5'/>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='Package Headline' />

                    <textarea {...register("description")} placeholder="Description" />

                    <input type="number" {...register("price")} placeholder="Price" />

                    <input type="number" {...register("duration")} placeholder="Duration (Days)" />

                    <input type="text" {...register("img")} placeholder="Image URL" />
                    
                    <input className='btn btn-warning' type="submit" />
                </form>
            </div>

            <div className="my-5">
                <h2 className='text-center' style={{ fontFamily: "Fruktur" }}>OUR AWESOME TOUR PACKAGES</h2>

                <h2 className='text-center fs-4' style={{ fontFamily: "Fruktur" }}>At now we have <span className='text-danger'>"{data.length}"</span> packages</h2>

                <hr className='w-25 mx-auto' />
                <div className=''>
                    {
                        data.map(tour =>
                            <ManageSinglePackage
                                key={tour.id}
                                tour={tour}
                            ></ManageSinglePackage>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ManagePackage;