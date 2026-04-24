import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../index.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // prevents page reload

    // basic validation
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await registerUser(email, password);
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err?.message || "Registration failed");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn-green">
          Register
        </button>
      </form>

      <p className="text-center">
        Already have an account?{" "}
        <Link to="/login" className="link">
          Login
        </Link>
      </p>
    </div>
  );
}