import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProjectContainer from "../../components/Projects/ProjectContainer";
import EventContainer from "../../components/Events/EventContainer";
import ReactCalender from "../../components/Calendar/Calendar"



export default function Landing() {
    return (
        <div className="app-body">
          <div className="sidebar-container">
               <Sidebar/>
          </div>
          <div className="body-container">
               <div className="top-container">
               <ProjectContainer/>
               <EventContainer />
               </div>
               <div className="bottom-container">
               <ReactCalender />
               </div>
          </div>
        </div>
    );
}
