import React from "react";
import { Link } from "react-router-dom";

export const LandingComponent = () => {
     return (
          <div className="landing-form-buttons">
               <button>
                    <Link to="/login">Login</Link>
               </button>
               <button>
                    <Link to="/register">Register</Link>
               </button>
          </div>
     );
};
