import React, { useState } from "react";

function CountdownTimer() {
  const [countdownTime, setCountdownTime] = useState("");
  const [countdown, setCountdown] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  const startCountdown = () => {
    if (isNaN(countdownTime) || countdownTime <= 0) {
      alert("Please enter a valid positive number!");
      return;
    }

    let timeLeft = parseInt(countdownTime);
    setCountdown(timeLeft);

    const id = setInterval(() => {
      timeLeft -= 1;
      setCountdown(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(id);
        setIntervalId(null);
        alert("Countdown complete!");
      }
    }, 1000);

    setIntervalId(id);
  };

  const resetCountdown = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setCountdown(null);
    setCountdownTime("");
  };

  return (
    <div className="section">
      <h2>Countdown Timer</h2>
      <input
        type="number"
        placeholder="Enter seconds"
        value={countdownTime}
        onChange={(e) => setCountdownTime(e.target.value)}
        className="input"
      />
      <div>
        <button onClick={startCountdown} className="button">
          Start Countdown
        </button>
        <button onClick={resetCountdown} className="reset-button">
          Reset
        </button>
      </div>
      {countdown !== null && <p>Time Left: {countdown}s</p>}
    </div>
  );
}

export default CountdownTimer;
