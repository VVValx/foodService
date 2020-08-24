import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { googleAuth, auth } from "../../firebase/firebase";
import "./auth.css";

function Login({ history }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = ({ target: input }) => {
    const newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const handleSubmit = async () => {
    if (data.email === "" || data.password === "")
      return setError("incorrect password or email");

    const { email, password } = data;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setData({
        email: "",
        password: "",
      });

      history.push("/");
    } catch (error) {
      setError(error.message);
    }

    setError("");
  };

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
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
          </div>

          <div className="form-input">
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </div>

          <div className="form-input">{error && <p>{error}</p>}</div>

          <div className="form-input">
            <button onClick={handleSubmit}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
