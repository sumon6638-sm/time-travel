import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

const UpdateAction = () => {
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/admin';

    const { id } = useParams();

    const [tour, setTour] = useState({status: 'Accept'});

    useEffect(() => {
        fetch(`https://bloodcurdling-cheateau-92804.herokuapp.com/booked/${id}`)
            .then(res => res.json())
            .then(data => setTour(data));
    }, [])    

    const handleActionChange = e => {
        const updatedAction = e.target.value;
        const updatedOrder = { ...tour }
        updatedOrder.status = updatedAction;
        setTour(updatedOrder);
    }

    

    const handleUpdate = e => {
        if ((tour.status) == 'Accept') {
            fetch(`https://bloodcurdling-cheateau-92804.herokuapp.com/booked/${id}`, {
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
        else (
            alert("Please write Accept properly ")
        )
    }

    return (
        <div className='container text-center my-5'>
            <h2>Do you want to Approve it?</h2>
            <form onSubmit={handleUpdate}>
                <label className='my-2'>If you want to approve it then write 'Accept'</label><br />

                <input type="text" onChange={handleActionChange} placeholder='Accept'/>

                <input className='btn btn-success mx-2' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateAction;