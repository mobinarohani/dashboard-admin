import React ,{useState,useEffect}from 'react'
import './Home.css'
import Chart from '../../Components/Charts/Charts'

export default function Home() {

  const[Sales,setSales]=useState([]);

  useEffect(()=>{

  },[])

  return (
    <div className='containerHome'>
      <Chart title="Year Sale" data={Sales} datakey={Sale}/>
    </div>
  )
}
