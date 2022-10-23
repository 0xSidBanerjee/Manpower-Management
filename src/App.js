import React from "react";
import "./App.css";
import Dashboard from "./containers/Dashboard/Dashboard";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import { MainPage } from "./containers/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./containers/Landing/Landing";
import { ProjectPage } from "./containers/ProjectPage/ProjectPage";
import { LandingLogin } from "./components/LandingLogin/LandingLogin";
import { LandingRegister } from "./components/LandingRegister/LandingRegister";
import { LandingComponent } from "./components/LandingComponent/LandingComponent";

function App() {
     return (
          <Routes>
               <Route path="/" element={<Landing />}>
                    <Route index element={<LandingComponent />} />
                    <Route path="register" element={<LandingRegister />} />
                    <Route path="login" element={<LandingLogin />} />
               </Route>
               <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<MainPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="projects" element={<ProjectPage />} />
               </Route>
          </Routes>
     );
}

export default App;
