import React from 'react'
import { ComposedChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from "recharts";
import './PieCharts.css'

export default function PieCharts({ title, data, datakey }) {

    const style = {
        top: 0,
        left: 350,
        lineHeight: "24px"
    };

    return (
        <div className='chartPie'>
            <h3 className="chartTitle">{title}</h3>
            <ComposedChart
                layout="vertical"
                width={350}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip />
                <Legend />
                <Bar dataKey={datakey} barSize={20} fill="#337CCF" />
            </ComposedChart>
        </div>
    )
}
