import React from "react";
import "./profilePage.css";
import Avatar from "react-avatar";
function ProfilePage() {
     return (
          <div className="profile-page-container">
               <div className="profile-page-banner">
                    <img
                         src={require("../../assets/image/Mask-group.png")}
                         alt="background-img"
                    ></img>
               </div>

               <div className="profile-page-avatar">
                    <Avatar round name="User" />
               </div>

               <form className="profile-form-container">
                    <h2> Your Profile:</h2>

                    <div className="profile-form-group">
                         <label for="fname"> First Name : </label>
                         <input
                              type="text"
                              id="fname"
                              name="fname"
                              placeholder="Your First Name"
                         ></input>
                    </div>

                    <div className="profile-form-group">
                         <label for="lname"> Last Name : </label>
                         <input
                              type="text"
                              id="lname"
                              name="lname"
                              placeholder="Your Last Name"
                         ></input>
                    </div>

                    <div className="profile-form-group">
                         <label for="number">Phone No. : </label>
                         <input type="number" id="number" name="number" placeholder="Your Phone No."></input>
                    </div>

                    <div className="profile-form-group">
                         <label for="email">Email ID : </label>
                         <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Your Email Address"
                         ></input>
                    </div>

                    <div className="profile-form-group">
                         <label for="role">Role : </label> <br></br>
                         <textarea
                              placeholder="Your role in the Project"
                              rows="3"
                              cols="45"
                         ></textarea>
                    </div>

                    <div className="profile-form-group">
                         <button>Edit</button>
                         <button type="submit">Save</button>
                    </div>
               </form>
          </div>
     );
}
export default ProfilePage;
