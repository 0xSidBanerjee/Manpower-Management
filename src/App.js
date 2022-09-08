import React from "react"
import './App.css';
import ProjectContainer from "./Components/landing/ProjectContainer";
import ReactCalender from "./Components/calendar/Calendar";

function App() {
  return (
    <div className="app-body">
      <ProjectContainer />
      <ReactCalender />
    </div>
  );
}

export default App;
