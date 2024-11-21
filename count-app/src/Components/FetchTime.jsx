import React, { useState } from "react";

function FetchTime() {
  const [currentTime, setCurrentTime] = useState("");

  const fetchTime = () => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString());
  };

  return (
    <div className="section">
      <h2>Fetch Current Time</h2>
      <button onClick={fetchTime} className="button">
        Fetch Time
      </button>
      {currentTime && <p>Current Time: {currentTime}</p>}
    </div>
  );
}

export default FetchTime;
