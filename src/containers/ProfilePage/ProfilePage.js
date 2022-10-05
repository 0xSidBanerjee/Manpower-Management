import React from "react"; 
import './App.css'
import Avatar from 'react-avatar';
import 'profilePage.css'
function ProfilePage () {

 
  return(
    <div className="profile-page">
    <div>
      <img src={require("./assets/image/Mask-group.png")} alt="background-img" style={{width:'100vw',height:'200px'}}></img>

    </div>

    <div style={{position:'absolute', left:'20px'}}>
      <Avatar round name="Aradhya Kumar"/>
    </div>



<form>
<h2> Your Profile:</h2>
<div className="form--name-container">
<label for="name"> First Name : </label>
<input type="name" id="name" name="name" placeholder="Your First Name"></input>
<label for="name"> Last Name : </label> 
<input type="Lname" id="Lname" name="Lname" placeholder="Your Last Name"></input><br></br>

</div>
<br></br>
<div className="form--mail-container">
<label for="number">Phone No. : </label>
<input type="tel" id="no." name="no." placeholder="Your Phone No."></input>
<label for="name">Email ID : </label> 
<input type="email" id="email" name="email" placeholder="Your Email Address"></input>

</div>
<div className="form--role-container">
<label for="role">Role :   </label> <br></br>
<textarea placeholder="Your role in the Project" rows="5" cols="50"></textarea><br></br>

</div>
<button>Edit</button>
<button>Save</button>
</form> 

  </div>
  )
};
export default ProfilePage;
