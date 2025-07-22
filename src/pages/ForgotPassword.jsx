import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [enteredOTP, setEnteredOTP] = useState("");
  const [newPass, setNewPass] = useState("");

  const handleSendOTP = () => {
    const generatedOTP = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("resetEmail", email);
    localStorage.setItem("resetOTP", generatedOTP.toString());
    alert(`OTP sent: ${generatedOTP}`); // simulate sending OTP
    setStep(2);
  };

  const handleReset = () => {
    const storedOTP = localStorage.getItem("resetOTP");
    const storedEmail = localStorage.getItem("resetEmail");

    if (enteredOTP === storedOTP && storedEmail === email) {
      const user = JSON.parse(localStorage.getItem("signupData"));
      if (user.email === email) {
        localStorage.setItem("signupData", JSON.stringify({ ...user, password: newPass }));
        alert("Password reset successful!");
        setStep(3);
      } else {
        alert("Email not found");
      }
    } else {
      alert("Incorrect OTP");
    }
  };

  return (
    <div style={{ color: "white", padding: "2rem" }}>
      {step === 1 && (
        <>
          <h2>Reset Password</h2>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
          <button onClick={handleSendOTP}>Send OTP</button>
        </>
      )}

      {step === 2 && (
        <>
          <h2>Enter OTP & New Password</h2>
          <input value={enteredOTP} onChange={(e) => setEnteredOTP(e.target.value)} placeholder="OTP" />
          <input value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="New password" />
          <button onClick={handleReset}>Reset Password</button>
        </>
      )}

      {step === 3 && <h3>Password reset complete ✅</h3>}
    </div>
  );
}
