import Navigationbar from "../components/Dashboard/Navigation";
import Header from "../components/Dashboard/header";
import Stats from "../components/Dashboard/stats";
import Linechart from "../components/Dashboard/LineChart";
import PieChart from "../components/Dashboard/PieChart";
import Schedule from "../components/Dashboard/schedule";
import "./Dashboard_page.css";

const DashPage = () => {
  return (
    <div className="dashcontainer">
      <div className="LeftNav">
        <Navigationbar />
      </div>
      <div className="RightContainer">
        <Header />
        <Stats />
        <Linechart />
        <div className="RightContainerBtn">
          <PieChart />
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default DashPage;
