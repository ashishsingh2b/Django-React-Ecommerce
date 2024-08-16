// src/screens/OrderChartScreen.js

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';

const OrderChartScreen = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = location.state ? location.state.orders : [];
                const paidOrders = fetchedData.filter(order => order.isPaid);
                setData(paidOrders);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [location.state]);

    return (
        <div style={{ padding: '25px', overflowX: 'auto' }}>
            <h1>Order Chart</h1>
            {loading ? (
                <Loader /> // Show loader while fetching data
            ) : data.length === 0 ? (
                <Message variant='info'>No paid orders to display</Message>
            ) : (
                <div style={{ width: '100%', height: '70vh' }}> {/* Adjusted height to be responsive */}
                    <ResponsiveContainer>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="createdAt"
                                tickFormatter={(value) => value.substring(0, 10)}
                                domain={['auto', 'auto']}
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar 
                                dataKey="totalPrice" 
                                fill="#32a852" // Green color
                                barSize={20} // Slim columns
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default OrderChartScreen;
