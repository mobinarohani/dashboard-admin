import React, { useState, useEffect } from 'react'
import './AreaCharts.css'
import { ResponsiveContainer ,BarChart, Bar, XAxis, YAxis } from 'recharts';

export default function AreaCharts() {

    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    let SaleData = [];
    const [Datas, setDatas] = useState([]);
    const [laptopLenovo, setlaptopLenovo] = useState([]);
    const [laptopAsus, setlaptopAsus] = useState([]);
    const [laptopHp, setlaptopHp] = useState([]);
    const [monthdata, setmonthdata] = useState("Jan");


    useEffect(() => {
        fetch("http://localhost:3000/laptopLenovo")
            .then((res) => {
                return res.json();
            })
            .then((data) => setlaptopLenovo(data))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/laptopAsus")
            .then((res) => {
                return res.json();
            })
            .then((data) => setlaptopAsus(data))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/laptopHp")
            .then((res) => {
                return res.json();
            })
            .then((data) => setlaptopHp(data))
    }, []);
    let datam = [{
    //     name: "Page A",
    //     sale1: 4000,
    //     sale2: 2400,
    //     sale3: 2400
    // },
    // {
    //     name: "Page A",
    //     sale1: 4000,
    //     sale2: 2400,
    //     sale3: 2400
    // },{
    //     name: "Page C",
    //     uv: 2000,
    //     pv: 9800,
    //     amt: 2290
    },
    ]

    useEffect(() => {
        console.log(monthdata);


        laptopLenovo.find(datavalue => {
            if (datavalue.name == monthdata) {
                SaleData.push(datavalue.Sale);
            }
        })

        laptopAsus.find(datavalue => {
            if (datavalue.name == monthdata)
                SaleData.push(datavalue.Sale);
        })

        laptopHp.find(datavalue => {
            if (datavalue.name == monthdata)
                SaleData.push(datavalue.Sale);
        })

        if (SaleData) {
            datam = [{
                name: monthdata,
                sale1: SaleData[0],
                sale2: SaleData[1],
                sale3: SaleData[2]
            }]

            console.log("datam", datam);
        }
        console.log('Datas', Datas);

    }, [monthdata]);

    return (
        <div className='chartArea'>
            <div className="inputvalue">
                <h3>choose :</h3>
                <select className='Select-input' value={monthdata} onChange={(event) => setmonthdata(event.target.value)}>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                </select>
            </div>
            <ResponsiveContainer width='100%' aspect={4}>
                <BarChart width={600} height={300} data={datam}>
                    <XAxis dataKey="sale1"  />
                    <YAxis />
                    <Bar dataKey='name' barSize={30} fill="#C2D9FF"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
