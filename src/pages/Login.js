import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import "./AuthForm.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
    history.push("/dashboard");
  };

  return (
    <div className="form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
