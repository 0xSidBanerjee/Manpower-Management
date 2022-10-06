import React from 'react'
import './Sidebar.css'
import {SearchSharp, DashboardSharp, BarChartSharp, AccountCircleSharp, SettingsSharp, LogoutSharp} from '@mui/icons-material';

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
          <h1 className='sidebar-header'>MSC Tasker</h1>
          <button className="sidebar-search sidebar-buttons "><SearchSharp/>Search</button>
          <div className="sidebar-buttons-container">
            <button className="sidebar-buttons"><DashboardSharp/>Dashboard</button>
            <button className="sidebar-buttons"><BarChartSharp/>Statistics</button>
            <button className="sidebar-buttons"><AccountCircleSharp/>Profile</button>
            <button className="sidebar-buttons"> <SettingsSharp/>Settings</button>
          </div>
          <button className="sidebar-logout"><LogoutSharp/>Logout</button>
      </div>
    </div>
  )
}

export default Sidebar;