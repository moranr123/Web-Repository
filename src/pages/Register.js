import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import "./AuthStyles.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async () => {
    const nextErrors = {
      name: name.trim() ? "" : "Name is required",
      email: email.trim() ? "" : "Email is required",
      password: password.trim() ? "" : "Password is required",
    };

    if (nextErrors.name || nextErrors.email || nextErrors.password) {
      setErrors(nextErrors);
      return;
    }

    setErrors({ name: "", email: "", password: "" });

    await api.post("/auth/register", { name, email, password });
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Create your account</h2>

        <div className="form-group">
          <label className="auth-label" htmlFor="name">Name</label>
          <input
            id="name"
            className={`auth-input${errors.name ? " input-error" : ""}`}
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name ? <div className="error-text">{errors.name}</div> : null}
        </div>

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
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password ? <div className="error-text">{errors.password}</div> : null}
        </div>

        <button className="auth-button" onClick={handleRegister}>Sign up</button>

        <div className="auth-footer">
          <span>Already have an account? </span>
          <span className="auth-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
}
