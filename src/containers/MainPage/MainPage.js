import React from "react";
import ProjectContainer from "../../components/Projects/ProjectContainer";
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
                    <ProjectContainer />
                    <EventContainer />
               </div>
               <div className="main-right-container">
                    <ReactCalender />
                    {/* <ToDo /> */}
               </div>
          </div>
     );
};
