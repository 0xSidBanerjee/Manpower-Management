import React from "react"
import './App.css';
import Dashboard from "./containers/Dashboard/Dashboard";
import ProfilePage from "./containers/ProfilePage/ProfilePage";

import { Routes, Route } from "react-router-dom"
import { Landing } from "./containers/Landing/Landing";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Landing />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/profile" element={<ProfilePage />}/>
    </Routes>
  );
}

export default App;
