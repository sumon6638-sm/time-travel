import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

const UpdatePackage = () => {
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/admin';

    const { id } = useParams();

    const [tour, setTour] = useState([]);

    useEffect(() => {
        fetch(`https://bloodcurdling-cheateau-92804.herokuapp.com/packages/${id}`)
            .then(res => res.json())
            .then(data => setTour(data));
    }, [])

    const handleNameChange = e => {
        const updatedAction = e.target.value;
        const updatedOrder = { ...tour }
        updatedOrder.name = updatedAction;
        setTour(updatedOrder);
    }

    const handlePriceChange = e => {
        const updatedAction = e.target.value;
        const updatedOrder = { ...tour }
        updatedOrder.price = updatedAction;
        setTour(updatedOrder);
    }

    const handleUpdateTour = e => {
        fetch(`https://bloodcurdling-cheateau-92804.herokuapp.com/package/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tour)
        })
            .then(res => res.json())
            .then(data => {
                alert('Accepted!!');
                history.push(redirect_url);
                console.log(data);
            });
        e.preventDefault()
    }



    return (
        <div className='container'>
            <h2>The tour of: {tour.name}</h2>

            <form onSubmit={handleUpdateTour}>
                <label className='my-2 mx-3'>Name</label>
                <input type="text" onChange={handleNameChange} placeholder='Name' /> <br />

                <label className='my-2 mx-3'>Price</label>
                <input type="number" onChange={handlePriceChange} placeholder='$' /> <br />

                <input className='btn btn-success mx-2' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdatePackage;