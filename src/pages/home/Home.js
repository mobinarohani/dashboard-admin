import React, { useState, useEffect } from "react";
import "./Home.css";
import Chart from "../../Components/Charts/Charts";
import PieCharts from "../../Components/PieCharts/PieCharts";

export default function Home() {
  const [Sales, setSales] = useState([]);
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

  useEffect(() => {
    fetch("http://localhost:3000/Sales")
      .then((res) => {
        return res.json();
      })
      .then((data) => setSales(Object.entries(data)));
  }, []);

  return (
    <div className="containerHome">
      {Sales ? (
        <>
          <div>
            <Chart
              title="Year Sale"
              data={Sales.map((sale) => sale[1])}
              datakey="Sale"
            />
          </div>
          <div className="containerProduct">
            <div className="productElement">
              <div>
                <PieCharts
                  title="Lenovo Sale"
                  data={laptopLenovo.map((sale) => sale[1])}
                  datakey="Sale"
                />
              </div>
            </div>
            <div className="productElement">
              <div>
                <PieCharts
                  title="Asus Sale"
                  data={laptopAsus.map((sale) => sale[1])}
                  datakey="Sale"
                />
              </div>
            </div>
            <div className="productElement">
              <div>
                <PieCharts
                  title="Hp Sale"
                  data={laptopHp.map((sale) => sale[1])}
                  datakey="Sale"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
