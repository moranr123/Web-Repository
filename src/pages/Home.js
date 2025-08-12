import { useNavigate } from "react-router-dom";
import "./AuthStyles.css";

export default function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="home-page">
      <div className="home-card">
        <h2 className="home-header">Welcome{user?.name ? `, ${user.name}` : ""}</h2>
        <p className="home-details">{user?.email}</p>
        <button className="logout-button" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
