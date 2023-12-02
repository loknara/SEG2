/* Created by Anish Dasti 

Once logged in, the profile page will update and display the user's profile details.

Can use this login:
Email: test@gmail.com
Password: password

And change email to test2@gmail.com to test the change
*/

import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

  function Profile() {
    const { currentUser } = useAuth();

    return (
        <div className="currensee-container">   
            <div className="profile-details">
              <div className="detail">
                <strong>Email:</strong> {currentUser ? currentUser.email : ""}
              </div>
              <div className="detail">
                <strong>Username:</strong> {currentUser ? currentUser.email : ""}
              </div>
              <div className="detail">
                <strong>Password:</strong> xxxxxxxx
              </div>
            </div>

            <div className="buttons">
              <Link to="/Profile/EditAccount"> 
                <button className="editButton">Edit Account Details</button>
              </Link>
              <button className="editButton" onClick={() => handleAdvancedSettingsClick()}>Advanced Settings</button>
            </div>


        </div>
       
      );
    }

    
    function handleAdvancedSettingsClick() {
      // Navigate to the advanced settings page
    }

export default Profile;

