import "./stats.css";
import Revenues from "../assets/revenue.png";
import Transactions from "../assets/transactions.png";
import Likes from "../assets/likes.png";
import Users from "../assets/users.png";

const Stats = () => {
  return (
    <div className="stats_container">
      <div className="revenue">
        <div className="iconContainer">
          <img src={Revenues} alt=""></img>
        </div>
        <p className="title1">Total Revenues</p>
        <p className="value">$2,129,430</p>
      </div>
      <div className="transactions">
        <div className="iconContainer">
          <img src={Transactions} alt=""></img>
        </div>
        <p className="title1">Total Transactions</p>
        <p className="value">1,520</p>
      </div>
      <div className="likes">
        <div className="iconContainer">
          <img src={Likes} alt=""></img>
        </div>
        <p className="title1">Total Likes</p>
        <p className="value">9,721</p>
      </div>
      <div className="users">
        <div className="iconContainer">
          <img src={Users} alt=""></img>
        </div>
        <p className="title1">Total Users</p>
        <p className="value">892</p>
      </div>
    </div>
  );
};
export default Stats;
