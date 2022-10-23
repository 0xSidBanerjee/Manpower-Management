import React from "react";
import DashboardProjectContainer from "../../components/DashboardProjects/DashboardProjectContainer";
import EventContainer from "../../components/Events/EventContainer";
import ReactCalender from "../../components/Calendar/Calendar";
// import Todo from "../../components/ToDoList/Todo";
// import ToDo from "../../components/ToDo/ToDo";
import Header from "../../components/Header/Header";
import "./MainPage.css"

export const MainPage = () => {
     return (
          <div className="main-container">
               <div className="main-top-container">
                    <Header />
               </div>
               <div className="main-left-container">
                    <DashboardProjectContainer />
                    <EventContainer />
               </div>
               <div className="main-right-container">
                    <ReactCalender />
                    {/* <ToDo /> */}
               </div>
          </div>
     );
};
