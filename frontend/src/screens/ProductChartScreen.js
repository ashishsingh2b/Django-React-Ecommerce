// src/screens/ProductChartScreen.js

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductChartScreen = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            try {
                // Use data passed through location state
                const fetchedData = (location.state && location.state.products) || [];
                
                console.log('Fetched Data:', fetchedData); // Debug: Check fetched data

                // Organize data by category
                const categoryData = fetchedData.reduce((acc, product) => {
                    if (!acc[product.category]) {
                        acc[product.category] = [];
                    }
                    acc[product.category].push({
                        name: product.name,
                        stock: product.countInStock // Assuming countInStock is the stock quantity
                    });
                    return acc;
                }, {});

                console.log('Category Data:', categoryData); // Debug: Check organized data

                // Transform data into format suitable for the chart
                const transformedData = Object.keys(categoryData).map(category => ({
                    category,
                    products: categoryData[category]
                }));

                console.log('Transformed Data:', transformedData); // Debug: Check transformed data

                setData(transformedData);
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
            <h1>Product Stock by Category</h1>
            {loading ? (
                <Loader /> // Show loader while fetching data
            ) : data.length === 0 ? (
                <Message variant='info'>No products to display</Message>
            ) : (
                <div style={{ width: '100%', height: '70vh' }}> {/* Adjusted height to be responsive */}
                    <ResponsiveContainer>
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip
                                content={({ payload }) => {
                                    if (payload && payload.length) {
                                        const { category, products } = payload[0].payload;
                                        return (
                                            <div className="custom-tooltip">
                                                <p><strong>Category:</strong> {category}</p>
                                                {products.map(product => (
                                                    <p key={product.name}>
                                                        <strong>{product.name}:</strong> {product.stock} units
                                                    </p>
                                                ))}
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Legend />
                            {data.flatMap(d => d.products.map(p => p.name)).map((name, index) => (
                                <Bar key={name} dataKey={`products.${index}.stock`} name={name} fill={getColor(index)} />
                            ))}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

// Function to get color for each bar (you can customize this)
const getColor = (index) => {
    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#a4de6c', '#d0ed57'];
    return colors[index % colors.length];
};

export default ProductChartScreen;
