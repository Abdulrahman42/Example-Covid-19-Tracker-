import React, { useState, useEffect } from "react";
// import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

interface Data {
  active: number
  confirmed: number
  recovered: number
  deaths: number
  last_update: string
}

interface CardProps {
  data : Data
}
const Chart = ({ data } : CardProps ) => {
  console.log(data);
  const [dailyData, setDailyData] = useState([]);

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setDailyData(await fetchDailyData());
  //   };

  //   fetchAPI();
  // }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart =  (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [data.confirmed, data.recovered, data.deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ` },
      }}
    />
  );
  return (
    <div className={styles.container}>{barChart}</div>
  );
};

export default Chart;
