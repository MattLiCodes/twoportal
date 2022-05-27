import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import WorkoutDisplay from "./routes/WorkoutDisplay";
import CrewDisplay from "./routes/CrewDisplay";

function App() {
  return (
    <div className="App">
      <h1>TwoPortal</h1>
      <Routes>
        <Route name="CrewDisplay" path="/" element={<CrewDisplay />} />
        <Route
          name="WorkoutDisplay"
          path="/workout"
          element={<WorkoutDisplay />}
        />
      </Routes>
    </div>
  );
}

export default App;
