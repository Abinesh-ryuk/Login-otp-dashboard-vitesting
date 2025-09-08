import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Otp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  function handleSubmit() {
    if (otp) {
      navigate("/dashboard");
    } else {
      alert("Please enter OTP");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>OTP Page</h1>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />
      <button onClick={handleSubmit} style={{ padding: "10px 20px" }}>
        Submit
      </button>
    </div>
  );
}
