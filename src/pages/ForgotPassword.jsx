import { useState } from "react";
import { resetPassword } from "../services/authService";
import "../index.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    try {
      await resetPassword(email);
      alert("Password reset email sent");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Forgot Password</h2>

      <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />

      <button className="btn-yellow" onClick={handleReset}>
        Reset Password
      </button>
    </div>
  );
}