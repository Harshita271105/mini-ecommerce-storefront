import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Signup() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email) {
      alert("Enter email");
      return;
    }

    // ✅ SAVE USER
    localStorage.setItem("user", email);

    alert("Signup successful");
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Sign Up</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSignup}>Create Account</button>
      </div>
    </>
  );
}
