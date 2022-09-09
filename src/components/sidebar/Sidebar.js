import React from 'react'
import './Sidebar.css'
import {SearchSharp, DashboardSharp, RateReviewSharp, BarChartSharp, AccountCircleSharp, SettingsSharp, LogoutSharp} from '@mui/icons-material';

function Sidebar() {
  return (
    <div>
        <div className="parent-container">
        <div className="sidebar">
            <h1>MSC <br/> Tasker</h1>
            <div className="sidebar-buttons">
            <button className="sidebar-search"><SearchSharp/>Search</button>
            <button className="sidebar-elements"><DashboardSharp/>Dashboard</button>
            <button className="sidebar-elements"><BarChartSharp/>Statistics</button>
            <button className="sidebar-elements"><AccountCircleSharp/>Profile</button>
            <button className="sidebar-elements"> <SettingsSharp/>Settings</button>
            <button className="sidebar-logout"><LogoutSharp/>Logout</button>
        </div>
            

        </div>


    </div>
    </div>
  )
}

export default Sidebar