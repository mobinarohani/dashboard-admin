import React, { useState, useEffect } from 'react'
import './AreaCharts.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function AreaCharts() {

    let SaleData = [];
    const [Datas, setDatas] = useState([]);
    const [laptopLenovo, setlaptopLenovo] = useState([]);
    const [laptopAsus, setlaptopAsus] = useState([]);
    const [laptopHp, setlaptopHp] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/laptopLenovo")
            .then((res) => {
                return res.json();
            })
            .then((data) => setlaptopLenovo(Object.entries(data)))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/laptopAsus")
            .then((res) => {
                return res.json();
            })
            .then((data) => setlaptopAsus(Object.entries(data)))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/laptopHp")
            .then((res) => {
                return res.json();
            })
            .then((data) => setlaptopHp(Object.entries(data)))
    }, []);

    useEffect(() => {
        laptopLenovo.find(datavalue => {
            if (datavalue[1].name == 'Jan') SaleData.push(datavalue[1].Sale);
        })

        laptopAsus.find(datavalue => {
            if (datavalue[1].name == 'Jan') SaleData.push(datavalue[1].Sale);
        })

        laptopHp.find(datavalue => {
            if (datavalue[1].name == 'Jan') SaleData.push(datavalue[1].Sale);
        })

        if (SaleData) {
            let datam = {
                name: "Jan",
                sale1: SaleData[0],
                sale2: SaleData[1],
                sale3: SaleData[2]
            }


            setDatas(prev => {
                return [...prev, datam]
            })
        }

    }, []);


    console.log(Datas);

    // console.log( laptopLenovo[0][1].name);
    // console.log(SaleData);
    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];

    return (
        <div className='chartArea'>
            <ResponsiveContainer width='100%' aspect={4}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                    <Area
                        type="monotone"
                        dataKey="pv"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                    />
                    <Area
                        type="monotone"
                        dataKey="amt"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
