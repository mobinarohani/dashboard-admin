import React from 'react'
import { ResponsiveContainer ,BarChart, Bar, XAxis, YAxis } from 'recharts';
import './Charts.css'

export default function Chart({ title, data, datakey }) {
    return (
        <div className='chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width='100%' aspect={4}>
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="name"  />
                    <YAxis />
                    <Bar dataKey={datakey} barSize={30} fill="#C2D9FF"/>
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

