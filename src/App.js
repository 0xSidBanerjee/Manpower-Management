import React from "react"
import './App.css';
import ProjectContainer from "./Components/landing/ProjectContainer";
import ReactCalender from "./Components/calendar/Calendar";
import EventContainer from "./Components/landing/Eventcontainer";

function App() {
  return (
    <div className="app-body">
      <ProjectContainer />
      <ReactCalender />
      <EventContainer/>
    </div>
  );
}

export default App;
