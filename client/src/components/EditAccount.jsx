/* Created by Anish Dasti */

import React, { useState } from 'react';
import './EditAccount.css';

/*  function EditAccount() {
    return (
        <div>
            <div className="header">
                <h1>Edit Account Details</h1>
            </div>

        </div>
       
      );
    }*/

    function EditAccount() {
      const [email, setEmail] = useState('exampleemail@gmail.com');
      const [username, setUsername] = useState('exampleusername');
      const [password, setPassword] = useState('xxxxxxxx');
    
      const handleSaveChanges = () => {
        // Implement logic to save changes to the backend or update state
        console.log('Changes saved!');
      };
    
      return (
        <div className="currensee-container">
          <div className="header">
            <h1>EDIT ACCOUNT DETAILS</h1>
          </div>
    
          <div className="edit-profile-details">
            <div className="edit-detail">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="edit-detail">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="edit-detail">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
    
          <div className="button-container">
            <button className="save-button" onClick={handleSaveChanges}>
              Save Changes
            </button>
          </div>
        </div>
      );
    }


export default EditAccount;

