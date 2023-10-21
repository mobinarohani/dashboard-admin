import React ,{useState , useEffect} from 'react'
import './Features.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AreaCharts from '../AreaCharts/AreaCharts';

export default function Features() {
  const [laptopLenovo, setlaptopLenovo] = useState([]);
  const [laptopAsus, setlaptopAsus] = useState([]);
  const [laptopHp, setlaptopHp] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/laptopLenovo")
      .then((res) => {
        return res.json();
      })
      .then((data) => setlaptopLenovo(Object.entries(data)));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/laptopAsus")
      .then((res) => {
        return res.json();
      })
      .then((data) => setlaptopAsus(Object.entries(data)));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/laptopHp")
      .then((res) => {
        return res.json();
      })
      .then((data) => setlaptopHp(Object.entries(data)));
  }, []);
  return (
    <>
      <div className='containerfeaturs'>
        <div className='featursElement'>
          <h3 className='title'>Revanue</h3>
          <div className='valuefeaturs'>
            <span className='titlevaluefeaturs'>$2,415</span>
            <span className='showValuefeaturs'>-11
              <ArrowDownwardIcon className='features-icon-navigate' />
            </span>
          </div>
          <span>Compared to last month</span>
        </div>

        <div className='featursElement'>
          <h3 className='title'>Sales</h3>
          <div className='valuefeaturs'>
            <span className='titlevaluefeaturs'>$15,415</span>
            <span className='showValuefeaturs'>+15
              <ArrowUpwardIcon className='features-icon-pus' /></span>
          </div>
          <span>Compared to last month</span>
        </div>

        <div className='featursElement'>
          <h3 className='title'>Cost</h3>
          <div className='valuefeaturs'>
            <span className='titlevaluefeaturs'>$2,225</span>
            <span className='showValuefeaturs'>-4
              <ArrowDownwardIcon className='features-icon-navigate' />
            </span>
          </div>
          <span>Compared to last month</span>
        </div>
      </div>
      <AreaCharts />
    </>
  )
}
