/* Created by Anish Dasti */

import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

  function Profile() {
    return (
        <div className="currensee-container">
            <div className="header">
                <h1>PROFILE</h1>
            </div>

            
            <div className="profile-details">
              <div className="detail">
                <strong>Email:</strong> exampleemail@gmail.com
              </div>
              <div className="detail">
                <strong>Username:</strong> exampleusername
              </div>
              <div className="detail">
                <strong>Password:</strong> xxxxxxxx
              </div>
            </div>

            <div className="button-container">
              <Link to="/Profile/EditAccount"> 
                <button className="edit-button">Edit Account Details</button>
              </Link>
              <button className="advanced-button" onClick={() => handleAdvancedSettingsClick()}>Advanced Settings</button>
            </div>


        </div>
       
      );
    }

    
    function handleAdvancedSettingsClick() {
      // Navigate to the advanced settings page
    }

export default Profile;