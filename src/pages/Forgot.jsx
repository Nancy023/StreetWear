import { useState } from 'react';

export default function Forgot() {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOtp = (e) => {
    e.preventDefault();
    setOtpSent(true); // mock
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === '1234') {
      alert('✅ Password reset successful (mock)');
    } else {
      alert('❌ Invalid OTP');
    }
  };

  return (
    <div style={{ color: 'white', padding: '2rem' }}>
      <h2>Forgot Password</h2>
      {!otpSent ? (
        <form onSubmit={handleSendOtp}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '250px' }}
          />
          <br /><br />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit}>
          <input
            type="text"
            placeholder="Enter 4-digit OTP"
            maxLength="4"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '150px' }}
          />
          <br /><br />
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
}
