import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="register__wrapper">
        <div className="register__wrapper-left">
          <img
            alt="register-img"
            src="https://img.freepik.com/free-vector/schedule-concept-illustration_114360-1531.jpg?w=2000"
            className="register__wrapper-left-img"
          />
          <span>
            Organize and Plan Thoughts, Events and Posts with a button click
          </span>
        </div>
        <div className="register__wrapper-right">
          <div className="register__wrapper-right-box">
            <input
              type="text"
              placeholder="Enter your name"
              className="register__input"
            />
            <input
              type="email"
              placeholder="Email                                                                      "
              className="register__input"
            />
            <input
              type="number"
              placeholder="Mobile No."
              className="register__input"
            />
            <input
              type="password"
              placeholder="Password"
              className="register__input"
            />
            <button className="register__input-btn">Sign up</button>
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
            register via
          </span>

          <div className="register__options">
            <span>Google</span>
            <span>Facebook</span>
            <span>Instagram</span>
          </div>

          <h4
            style={{
              textAlign: "center",
              fontWeight: "450",
              marginTop: "45px",
              paddingLeft: "100px",
            }}
          >
            Already have an account?{" "}
            <span style={{ fontWeight: "400" }}>sign in</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Register;
