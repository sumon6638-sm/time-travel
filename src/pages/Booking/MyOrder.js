import React, { useEffect, useState } from 'react';
import useFirebase from '../../hook/useFirebase';
import ViewOrder from './ViewOrder';

const MyOrder = () => {
    const { user } = useFirebase();
    const mail = user.email
    
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://bloodcurdling-cheateau-92804.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email]);
    
    console.log(orders);
    return (
        <div className='container'>
            <h2 className='text-center' style={{ fontFamily: "Fruktur" }}>YOUR ORDERED PACKAGE {orders.length}</h2>
            {
                orders.map(order => <ViewOrder key={order.id} order={order}>
                </ViewOrder>)
            }
        </div>
    );
};

export default MyOrder;