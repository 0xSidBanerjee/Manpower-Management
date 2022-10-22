import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { LandingLogin } from "../../components/LandingLogin/LandingLogin";
import { LandingRegister } from "../../components/LandingRegister/LandingRegister";
import "./Landing.css";
import landingBg from "../../assets/image/landing-bg.png"

export const Landing = () => {
     const landingComponent = (
          <div className="landing-form-buttons">
               <button>
                    <Link to="/login">Login</Link>
               </button>
               <button>
                    <Link to="/register">Register</Link>
               </button>
          </div>
     );

     return (
          <div className="landing-app-container">
               <div className="landing-container">
                    <div className="landing-image">
                         <img src={landingBg} alt="landing background"/>
                    </div>
                    <div className="landing-content">
                         <h1>Welcome to <span>MSC Manpower</span></h1>
                         <Routes>
                              <Route path="/" element={landingComponent} />
                              <Route path="/register" element={<LandingRegister />} />
                              <Route path="/login" element={<LandingLogin />} />
                         </Routes>
                    </div>
               </div>
          </div>
     );
};
