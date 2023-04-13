import "./PieChart.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["one", "two", "three"],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["#98d89e", "#f6dc7d", "#ee8484"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="pie_container">
      <div className="pie_title">
        <p className="title_name">Top products</p>
        <select className="dropdown">
          <option>May - June 2021</option>
          <option>April - May 2021</option>
          <option>March - April 2021</option>
        </select>
      </div>
      <div className="pieFlex">
        <div className="pieChart">
          <Pie data={data} options={options}></Pie>
        </div>
        <div className="pieEleCont">
          <div className="pieEle">
            <p className="pieTitle1 pieTile">Basic Tees</p>
            <p className="pieValue">55%</p>
          </div>
          <div className="pieEle">
            <p className="pieTitle2 pieTile">Custom Short Pants</p>
            <p className="pieValue">31%</p>
          </div>
          <div className="pieEle">
            <p className="pieTitle3 pieTile">Super Hoodies</p>
            <p className="pieValue">14%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PieChart;
