import React, { useState } from "react";
import "./Log.css";
import LogImg from "./img/Login.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.error) {
      window.alert("Invalid Credentials!");
    } else {
      window.alert("Login Done");
      navigate("/Main");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="forms-box">
          <div className="login-register">
            <form method="POST" className="login">
              <h2 className="title">Login</h2>
              <div className="input-field">
                <i className="fa fa-envelope" aria-hidden="true" />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="input-field">
                <i className="fa fa-key" aria-hidden="true" />
                <input
                  name="password"
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              <input
                type="submit"
                className="btn"
                defaultValue="Login"
                onClick={loginUser}
              />
              <p className="social-text"> Or Login with</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="/" className="social-icon">
                  <i className="fa fa-google" aria-hidden="true" />
                </a>
                <a href="/" className="social-icon">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="panel">
        <div className="panel_left">
          <div className="content">
            <h3>Hello Friend!</h3>
            <p>Do not have account ? Make one for you </p>
            <a href="/Register">
              <button className="btn transparent" id="signup_btn">
                Sign Up
              </button>
            </a>
          </div>
          <img src={LogImg} alt="" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
