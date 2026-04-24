import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, googleLogin } from "../services/authService";
import "../index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      alert("Login successful");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Login</h2>

      <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

      <button className="btn-blue" onClick={handleLogin}>Login</button>

      <p className="text-center">
        <Link to="/forgot-password" className="link">Forgot Password?</Link>
      </p>

      <button className="btn-red" onClick={handleGoogle}>Login with Google</button>

      <p className="text-center">
        Don't have an account? <Link to="/register" className="link">Register</Link>
      </p>
    </div>
  );
}