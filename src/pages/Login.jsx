import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedEmail = localStorage.getItem("userEmail");
    const savedPass = localStorage.getItem("userPass");

    if (email === savedEmail && pass === savedPass) {
      localStorage.setItem("loggedInUser", email);
      alert("Login successful");
      navigate("/");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Enter password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      /><br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
