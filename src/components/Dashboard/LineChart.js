import "./LineChart.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Linechart = () => {
  const data = {
    labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
    datasets: [
      {
        data: [100, 420, 150, 440, 190, 250],
        borderColor: "#9BDD7C",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
      {
        data: [200, 390, 200, 300, 210, 440],
        borderColor: "#E9A0A0",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };
  const options = {
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        min: 0,
        max: 500,
        ticks: { stepSize: 100, padding: 10 },
        grid: { drawBorder: false },
        border: { display: false },
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <div className="graph">
      <div className="title_container">
        <div>
          <p className="title_name">Activities</p>
          <select className="dropdown">
            <option>May - June 2021</option>
            <option>April - May 2021</option>
            <option>March - April 2021</option>
          </select>
        </div>
        <div className="graphtags">
          <p className="tags">Guest</p>
          <p className="tags1">User</p>
        </div>
      </div>
      <div>
        <Line data={data} height="200" options={options}></Line>
      </div>
    </div>
  );
};
export default Linechart;
