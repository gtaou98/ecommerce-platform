import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './OrderHistoryPage.css';

const OrderHistoryPage = () => {
    const [orders, setOrders] = useState([]);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (currentUser) {
            const allOrders = JSON.parse(localStorage.getItem('orders')) || {};
            setOrders(allOrders[currentUser.email] || []);
        }
    }, [currentUser]);

    if (orders.length === 0) {
        return (
            <div className="order-history-page">
                <h2>Order History</h2>
                <p>You have no past orders.</p>
            </div>
        );
    }

    return (
        <div className="order-history-page">
            <h2>Order History</h2>
            {orders.map(order => (
                <div key={order.id} className="order-card">
                    <div className="order-header">
                        <h3>Order #{order.id}</h3>
                        <span>Date: {order.date}</span>
                        <span>Total: ${order.total.toFixed(2)}</span>
                    </div>
                    <div className="order-items">
                        {order.items.map(item => (
                            <div key={item.id} className="order-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h4>{item.name}</h4>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderHistoryPage;