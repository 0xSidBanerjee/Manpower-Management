import React, { useState } from "react";
import { Link } from "react-router-dom";
import { firebase, auth, provider } from './firebase';
import axios from "axios";

export const LandingLogin = () => {
     const [handleForm, setHandleForm] = useState({
          email: "",
          password: "",
     });
     

     const gsign = () => {
          auth.signInWithPopup(provider).catch(alert);
      }


     const handleLogin = async (e) => {
          e.preventDefault();
          axios.post("http://localhost:8000/auth/login", handleForm)
               .then((res) => {
                    console.log(res);
               })
               .catch((err) => {
                    console.log(err);
               });
     };

     return (
          <form onSubmit={handleLogin}>
               <div>
                    <label htmlFor="landing-form-email">Email:</label>
                    <input
                         type="email"
                         value={handleForm.email}
                         id="landing-form-email"
                         onChange={(e) =>
                              setHandleForm((prevState) => ({
                                   ...prevState,
                                   email: e.target.value,
                              }))
                         }
                    />
               </div>
               <div>
                    <label htmlFor="landing-form-password">Password:</label>
                    <input
                         type="password"
                         value={handleForm.password}
                         id="landing-form-password"
                         onChange={(e) =>
                              setHandleForm((prevState) => ({
                                   ...prevState,
                                   password: e.target.value,
                              }))
                         }
                    />
               </div>
               <div className="landing-form-buttons">
                    <button>Login</button>
                    <button><Link to="/register">Go to Register</Link></button>
               </div>
               <div>
            <center>
                <button style={{"marginTop" : "200px"}} 
                onClick={gsign}>Sign In with Google</button>
            </center>
        </div>
          </form>
     );
};
