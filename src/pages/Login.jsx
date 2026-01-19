import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email) {
      alert("Enter email or username");
      return;
    }

    // ✅ SAVE USER
    localStorage.setItem("user", email);

    alert("Login successful");
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Login</h2>

        <input
          placeholder="Email or Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}
