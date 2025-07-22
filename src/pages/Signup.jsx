import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Save signup info to localStorage
    const userData = { name, email, password };
    localStorage.setItem("signupUser", JSON.stringify(userData));
    alert("✅ Signup Successful!");

    // Send to Google Sheet
    const sheetURL =
      "https://script.google.com/macros/s/AKfycbx8J8Tldjc42zJ50ly6y1hrq4im2QfzKxMrnxdDXc1ZTVVxZTSUsUzODotIvXjQ5A55EA/exec";

    fetch(sheetURL, {
      method: "POST",
      body: JSON.stringify({ name, email }),
    })
      .then(() => console.log("✅ Sent to Google Sheets"))
      .catch((err) => console.error("❌ Error sending to sheet", err));

    // Navigate to login or home
    navigate("/login");
  };

  return (
    <div style={{ color: "white", padding: "2rem" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label>
          <br />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          style={{
            background: "#28a745",
            color: "white",
            padding: "0.6rem 1.2rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
