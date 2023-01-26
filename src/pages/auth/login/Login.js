import "./Login.scss";

import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__wrapper-left">
          <img
            alt="login-img"
            src="https://img.freepik.com/free-vector/schedule-concept-illustration_114360-1531.jpg?w=2000"
            className="login__wrapper-left-img"
          />
          <span>
            Organize and Plan Thoughts, Events and Posts with a button click
          </span>
        </div>
        <div className="login__wrapper-right">
          <div className="login__wrapper-right-box">
            <input type="email" placeholder="Email" className="login__input" />
            <input
              type="password"
              placeholder="Password"
              className="login__input"
            />

            <span className="login__forget">forgot password?</span>
            <button className="login__input-btn">Log In</button>
          </div>
          <span
            style={{
              textAlign: "center",
              paddingLeft: "50px",
              paddingTop: "20px",
            }}
          >
            OR
          </span>

          <span
            style={{
              textAlign: "center",
              paddingLeft: "50px",
              paddingTop: "20px",
            }}
          >
            Login via
          </span>

          <div className="login__options">
            <span>Google</span>
            <span>Facebook</span>
            <span>Instagram</span>
          </div>

          <h4
            style={{
              textAlign: "center",
              fontWeight: "450",
              marginTop: "45px",
              paddingLeft: "100px"
            }}
          >
            Don't have an account?{" "}
            <span style={{ fontWeight: "400" }}>create account</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
