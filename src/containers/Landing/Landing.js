import React from "react";
import { Outlet } from "react-router-dom";

import "./Landing.css";
import landingBg from "../../assets/image/landing-bg.png";

export const Landing = () => {
     return (
          <div className="landing-app-container">
               <div className="landing-container">
                    <div className="landing-image">
                         <img src={landingBg} alt="landing background" />
                    </div>
                    <div className="landing-content">
                         <h1>
                              Welcome to <span>MSC Manpower</span>
                         </h1>
                         <Outlet />
                    </div>
               </div>
          </div>
     );
};
