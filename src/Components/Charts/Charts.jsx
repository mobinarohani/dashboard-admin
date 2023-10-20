import React from 'react'

import {ResponsiveContainer  , Legend , Bar,BarChart , CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function Charts({title,data,datakey}) {
    return (
        <div className='charts'>
            <ResponsiveContainer width='100%' aspect={4}>
                <h3 className='title'>{title}</h3>
            <BarChart  data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={datakey} fill="#8884d8" />
            </BarChart>
            </ResponsiveContainer>

        </div>
    )
}
