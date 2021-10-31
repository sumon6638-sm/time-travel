import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";

const ManageOrders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://bloodcurdling-cheateau-92804.herokuapp.com/booked')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleStatus = () => {
        orders.status = 'success';
    }

    const handleDelete = id => {
        const url = `https://bloodcurdling-cheateau-92804.herokuapp.com/${id}`;
        fetch(url, {
            method: 'DELETE'
        }, [])
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted Successfully');
                    window.location.reload();
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
    }
    
    return (
        <div className='container'>
            <h2>All Orders{orders.length}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Package ID</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index+1}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.package_id}</td>
                            <td>{pd?.date}</td>
                            <button onClick={()=>handleStatus(pd.status)} className="btn bg-success p-2">{pd?.status}</button>
                            <button onClick={()=>handleDelete(pd._id)} className="btn bg-danger p-2 ms-3">Delete</button>
                            
                        </tr>
                    </tbody>
                ))}
            </Table>
            
        </div>
    );
};

export default ManageOrders;
