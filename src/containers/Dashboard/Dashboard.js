import React from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProjectContainer from "../../components/Projects/ProjectContainer";
import EventContainer from "../../components/Events/EventContainer";
import ReactCalender from "../../components/Calendar/Calendar";
// import Todo from "../../components/ToDoList/Todo";
// import ToDo from "../../components/ToDo/ToDo";
import Header from "../../components/Header/Header";

export default function Dashboard() {
    return (
        <div className="dashboard-body">
            <Sidebar />
            <div className="body-container">
                <div className="top-container">
                    <Header />
                </div>
                <div className="left-container">
                    <ProjectContainer />
                    <EventContainer />
                </div>
                <div className="right-container">
                    <ReactCalender />
                    {/* <ToDo /> */}
                </div>
            </div>
        </div>
    );
}
