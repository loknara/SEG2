/* Created by Anish Dasti */
/* 
This page allows to change the password. Can test this by logging in and entering the current password and a new password. 
After signing out, logging in with the old password won't work, and user must use the new password that they changed it to. 

Can use this login to test, and change password in edit account page:
Email: test2@gmail.com
Password: password
*/

import React, { useState } from 'react';
import './EditAccount.css';
import { useAuth } from '../contexts/AuthContext';
import { getAuth, updatePassword } from 'firebase/auth';

function EditAccount() {
  const { currentUser } = useAuth();

  const [password, setPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const handleChangePassword = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    try {
      // Update password
      await updatePassword(user, password);

      alert('Password updated successfully!');
    } catch (error) {
      console.error('Error updating password', error.message);
      alert('Error updating password. Please check your current password and try again. (Password must be at least 6 characters)');
    }
  };

  return (
    <div className="currensee-container">
      <div className="header">
        <h1>EDIT ACCOUNT DETAILS</h1>
      </div>

      <div className="edit-profile-details">
        <div className="edit-detail">
          <label htmlFor="currentPassword">Current Password:</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="edit-detail">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="button-container">
        <button className="save-button" onClick={handleChangePassword}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditAccount;
