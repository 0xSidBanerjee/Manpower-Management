import React from "react"
import './App.css';
import ProjectContainer from "./Components/landing/ProjectContainer";
import ReactCalender from "./Components/calendar/Calendar";
import EventContainer from "./Components/landing/Eventcontainer";
import Sidebar from "./Components/sidebar/Sidebar";
import Header from "./Components/header/Header";

function App() {
  return (
    <div className="app-body">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="body-container">
      <Header />
        <div className="top-container">
          <ProjectContainer />
          <EventContainer />
        </div>
        <div className="bottom-container">
          <ReactCalender />
        </div>
      </div>
    </div>
  );
}

export default App;
