import React from "react";
import FetchTime from "./Components/FetchTime";
import CountdownTimer from "./Components/CountdownTimer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Time Fetch and Countdown Application</h1>
      <FetchTime />
      <CountdownTimer />
    </div>
  );
}

export default App;
