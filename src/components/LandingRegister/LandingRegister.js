import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const LandingRegister = () => {
     const [handleForm, setHandleForm] = useState({
          name: "",
          email: "",
          password: "",
     });

     const handleRegister = async (e) => {
          e.preventDefault();
          axios.post("http://localhost:8000/auth/register", handleForm)
               .then((res) => {
                    console.log(res);
               })
               .catch((err) => {
                    console.log(err);
               });
     };
     return (
          <form onSubmit={handleRegister}>
               <div>
                    <label htmlFor="landing-form-name">Name:</label>
                    <input
                         type="input"
                         value={handleForm.name}
                         id="landing-form-name"
                         onChange={(e) =>
                              setHandleForm((prevState) => ({
                                   ...prevState,
                                   name: e.target.value,
                              }))
                         }
                    />
               </div>

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
                    <button>Register</button>
                    <button><Link to="/login">Go to Login</Link></button>
               </div>
          </form>
     );
};
