import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Workflow",
        data: [10, 15, 20, 25, 30, 20, 25, 35, 40, 45, 30, 50],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.4, // Curve the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e0e0e0", // Light gray grid lines
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div style={{ padding: "20px", background: "#fff", borderRadius: "8px" }}>
      <h3 style={{ marginBottom: "10px" }}>Recent Workflow</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;

