import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <div className="container">
      <h2 className="text-center">Dashboard</h2>

      <p><strong>Email:</strong> {user?.email}</p>

      <button className="btn-blue" onClick={() => navigate("/profile")}>
        Go to Profile
      </button>

      <button className="btn-red" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}