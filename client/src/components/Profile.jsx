/* Created by Anish Dasti */

import React from 'react';
import './Profile.css';

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
              <button className="edit-button" onClick={() => handleEditAccountClick()}>Edit Account Details</button>
              <button className="advanced-button" onClick={() => handleAdvancedSettingsClick()}>Advanced Settings</button>
            </div>


        </div>
       
      );
    }

    function handleEditAccountClick() {
      // Navigate to the edit account details page
    }
    
    function handleAdvancedSettingsClick() {
      // Navigate to the advanced settings page
    }

export default Profile;