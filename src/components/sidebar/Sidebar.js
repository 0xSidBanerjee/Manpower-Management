import React from "react";
import "./Sidebar.css";
import { auth } from './firebase';
import {
     SearchSharp,
     DashboardSharp,
     BarChartSharp,
     AccountCircleSharp,
     SettingsSharp,
     LogoutSharp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar() {
     const logout = () => {
		auth.signOut();
	}
    
     return (
               <div className="sidebar-container">
                    <h1 className="sidebar-header">MSC Tasker</h1>
                    <button className="sidebar-search sidebar-buttons ">
                         <SearchSharp />
                         Search
                    </button>
                    <div className="sidebar-buttons-container">
                         <button className="sidebar-buttons">
                              <DashboardSharp />
                              <Link to="/dashboard">Dashboard</Link>
                         </button>
                         <button className="sidebar-buttons">
                              <AccountCircleSharp />
                              <Link to="/dashboard/profile">Profile</Link>
                         </button>
                         <button className="sidebar-buttons">
                              <SettingsSharp />
                              <Link to="/dashboard/projects">Projects</Link>
                         </button>
                    </div>
                    <button onClick={logout} className="sidebar-logout">
                         <LogoutSharp />
                         Logout
                    </button>
               </div>
     );
}

export default Sidebar;
