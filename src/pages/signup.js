import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import "./AuthForm.css";

const Signup = () => {
  const [data, setData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    login(data);
    history.push("/dashboard");
  };

  return (
    <div className="form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={data.confirmPassword}
            onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
