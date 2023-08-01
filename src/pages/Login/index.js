/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../../components/Layout/Footer";
import LogoDesktop from "../../assets/img/logo-desktop.svg";

import "./style.scss";
import { login } from "../../redux/actions/auth";
import { Spin } from "antd";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 769 });

  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/co-pilot");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <Spin tip="Signing..." size="large" spinning={loading}>
      <div className="login">
        <div
          className={`login-main${isMobile ? " mobile" : ""}${
            isTablet ? " tablet" : ""
          }`}
        >
          <div className="login-main-left">
            <div className="login-main-left-header">
              <div className="login-main-left-header-logo">
                <img src={LogoDesktop} alt="Logo" />
              </div>
              <h1 className="login-main-left-header-title">Log in</h1>
              <p className="login-main-left-header-subtitle">
                Enter your credentials to access your account
              </p>
            </div>
            <div className="login-main-left-main">
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <label className="form-label" htmlFor="email">
                    Username
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label className="form-label" htmlFor="password">
                    Password
                    <a href="#" className="forget-password">
                      Forget Password?
                    </a>
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-checkbox">
                  <input type="checkbox" id="rememberMe" name="rememberMe" />
                  <label className="input-checkbox-label" htmlFor="rememberMe">
                    Remember information
                  </label>
                </div>
                <button type="submit" className="loginBtn">
                  Login
                </button>
                <div className="sign-up">
                  <p className="sign-up-caption">Not a member?</p>{" "}
                  <a href="#" className="sign-up-link">
                    Sign up
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="login-main-right">
            <div className="login-main-right-overide"></div>
          </div>
        </div>
        <Footer />
      </div>
    </Spin>
  );
};

export default Login;

//  Your username is Kata1 and temporary password is 8ENr6fD?.
