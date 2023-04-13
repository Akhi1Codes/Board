import Profile from "../assets/profilepic.png";
import Notification from "../assets/bellicon.png";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header_container">
        <p className="logoName">Dashboard</p>
        <div className="right_header">
          <input className="search" placeholder="Search..." type="text"></input>
          <img className="bell" alt="/" src={Notification}></img>
          <img className="picture" alt="/" src={Profile}></img>
        </div>
      </div>
    </div>
  );
};
export default Header;
