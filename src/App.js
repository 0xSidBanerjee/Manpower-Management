import React from "react"
import './App.css';
import ProjectContainer from "./Components/landing/ProjectContainer";
import ReactCalender from "./Components/calendar/Calendar";
import EventContainer from "./Components/landing/Eventcontainer";
import Sidebar from "./Components/sidebar/Sidebar";

function App() {
  return (
    <div className="app-body">
      <ProjectContainer />
      <ReactCalender />
      <EventContainer/>
      <Sidebar/>
    </div>
  );
}

export default App;
