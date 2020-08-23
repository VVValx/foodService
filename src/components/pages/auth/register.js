import React, { useState } from "react";
import Joi from "joi-browser";
import { auth, createDoc } from "../../firebase/firebase";

function Register({ history }) {
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState({
    name: "",
    password: "",
    email: "",
  });

  const schema = {
    name: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(6).max(50).required(),
    email: Joi.string().email().required(),
  };

  const handleInput = ({ name, value }) => {
    const obj = { [name]: value };
    const mySchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, mySchema, { abortEarly: true });

    return error ? error.details[0].message : null;
  };

  const handleChange = ({ target: input }) => {
    const newData = { ...data };
    const errorMessage = handleInput(input);
    const error = {};
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    newData[input.name] = input.value;
    setData(newData);
    setError(error);
  };

  const validateForm = () => {
    const { error } = Joi.validate(data, schema, { abortEarly: false });
    const errors = {};

    if (!error) return null;

    for (let items of error.details) {
      errors[items.path[0]] = items.message;
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();

    if (error) {
      return setError(error);
    }

    signup();
  };

  const signup = async () => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );

      const displayName = data.name;

      await createDoc(user, { displayName });

      setData({
        name: "",
        password: "",
        email: "",
      });
    } catch (error) {
      console.log(error);
    }

    history.replace("/");
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <div className="left-center">
          <button>Signin</button>
        </div>
      </div>

      <div className="login-right">
        <div className="form-center">
          <div className="form-input">
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
            />

            {error && <p className="error">{error.name}</p>}
          </div>

          <div className="form-input">
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={handleChange}
            />

            {error && <p className="error">{error.email}</p>}
          </div>

          <div className="form-input">
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />

            {error && <p className="error">{error.password}</p>}
          </div>

          <div className="form-input">
            <button className="primary-green" onClick={handleSubmit}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
