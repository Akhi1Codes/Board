import SigninButtons from "../components/Login_Page/SignIn_buttons";
import LoginForm from "../components/Login_Page/Login_form";
import "./Login_page.css";

const LoginPage = () => {
  return (
    <div>
      <div className="container">
        <div className="leftside">Board.</div>
        <div className="rightside">
          <div>
            <div className="heading">
              <p className="title">Sign In</p>
              <p className="sub_text">Sign in to your account</p>
            </div>
            <SigninButtons />
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
