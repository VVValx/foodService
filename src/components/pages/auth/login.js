import React from "react";
import { FcGoogle } from "react-icons/fc";
import { googleAuth } from "../../firebase/firebase";
import "./login.css";

function login() {
  return (
    <div className="login-wrapper">
      <div className="login-left">
        <div className="left-center">
          <button onClick={googleAuth}>
            <FcGoogle /> Google signin
          </button>
        </div>
      </div>

      <div className="login-right">
        <div className="form-center">
          <div className="form-input">
            <input type="text" name="email" placeholder="email" />
          </div>

          <div className="form-input">
            <input type="password" name="password" placeholder="password" />
          </div>

          <div className="form-input">
            <button className="primary-green">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
