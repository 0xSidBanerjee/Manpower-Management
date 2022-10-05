import React from "react";
import "./Landing.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProjectContainer from "../../components/Projects/ProjectContainer";
import EventContainer from "../../components/Events/EventContainer";
import ReactCalender from "../../components/Calendar/Calendar";

export default function Landing() {
    return (
        <div className="landing-body">
            <Sidebar />
            <div className="body-container">
                <div className="left-container">
                    <ProjectContainer />
                    <EventContainer />
                </div>
                <div className="right-container">
                    <ReactCalender />
                </div>
            </div>
        </div>
    );
}
