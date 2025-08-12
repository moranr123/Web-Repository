import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import "./AuthStyles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const nextErrors = {
      email: email.trim() ? "" : "Email is required",
      password: password.trim() ? "" : "Password is required",
    };

    if (nextErrors.email || nextErrors.password) {
      setErrors(nextErrors);
      return;
    }

    setErrors({ email: "", password: "" });

    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/home");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>

        <div className="form-group">
          <label className="auth-label" htmlFor="email">Email</label>
          <input
            id="email"
            className={`auth-input${errors.email ? " input-error" : ""}`}
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email ? <div className="error-text">{errors.email}</div> : null}
        </div>

        <div className="form-group">
          <label className="auth-label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className={`auth-input${errors.password ? " input-error" : ""}`}
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password ? <div className="error-text">{errors.password}</div> : null}
        </div>

        <button className="auth-button" onClick={handleLogin}>Login</button>

        <div className="auth-footer">
          <span>Don't have an account? </span>
          <span className="auth-link" onClick={() => navigate("/register")}>
            Register
          </span>
        </div>
      </div>
    </div>
  );
}
