import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function BarGraph ({ data }) {
    return (
        <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Confirmed" fill="#8884d8"/>
        <Bar dataKey="Recovered" fill="#82ca9d"/>
        <Bar dataKey="Deaths" fill="#8884d8"/>
        <Bar dataKey="Active" fill="#82ca9d"/>
        </BarChart>
    )
}

export default BarGraph
