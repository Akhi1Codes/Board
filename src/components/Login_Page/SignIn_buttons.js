import "./SignIn_buttons.css";
import google from "../assets/google.png";
import apple from "../assets/apple.png";

const SigninButtons = () => {
  return (
    <div className="btn_container">
      <button className="signinBtn">
        <img src={google} alt=""></img>
        Sign in with Google
      </button>
      <button className="signinBtn">
        <img src={apple} alt=""></img>
        Sign in with Apple
      </button>
    </div>
  );
};

export default SigninButtons;
