import React from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
     return (
          <div className="dashboard-container">
               <Sidebar />
               <div className="dashboard-body-container">
                    <Outlet />
               </div>
          </div>
     );
}
