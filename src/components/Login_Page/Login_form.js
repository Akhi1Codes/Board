import { Navigate } from "react-router-dom";
import React from "react";
import "./Login_form.css";

const LoginForm = () => {
  const [goToContact, setGoToContact] = React.useState(false);
  if (goToContact) {
    return <Navigate to="/dashboardpage" />;
  }

  return (
    <div className="form_container">
      <form>
        <label className="label_name">Email address</label>
        <input
          type="text"
          className="text_boxes"
          placeholder="johndoe@gmail.com"
        ></input>
        <label className="label_name">Password</label>
        <input
          type="password"
          className="text_boxes"
          placeholder="••••••••"
        ></input>
        <p className="fr_password">Forgot password?</p>
        <button
          onClick={() => {
            setGoToContact(true);
          }}
          className="SignIn"
        >
          Sign In
        </button>
        <p className="regis_here">
          Don't have an account? <span> Register here </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
