import "./Navigation.css";
import Dashboard from "../assets/dashboard_icon.png";
import Transcation from "../assets/transaction_icon.png";
import Schedule from "../assets/schedule_icon.png";
import User from "../assets/user_icon.png";
import Setting from "../assets/setting_icon.png";

const Navigationbar = () => {
  return (
    <div className="nav_container">
      <div className="nav_elements_container">
        <div className="nav_elements">
          <p className="logo">Board.</p>
          <ul>
            <li className="element">
              <img className="icons" src={Dashboard} alt=""></img>Dashboard
            </li>
            <li className="element">
              <img className="icons" src={Transcation} alt=""></img>Transcations
            </li>
            <li className="element">
              <img className="icons" src={Schedule} alt=""></img>Schedules
            </li>
            <li className="element">
              <img className="icons" src={User} alt=""></img>Users
            </li>
            <li className="element">
              <img className="icons" src={Setting} alt=""></img>Settings
            </li>
          </ul>
        </div>
        <div className="nav_btm">
          <p className="buttom_elements">Help</p>
          <p className="buttom_elements">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
