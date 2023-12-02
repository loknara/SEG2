/* Created by Lokesh Narasani */
//Firebase authentication code and Setup by Sid(Needed for checking if user is signed in for conditional rendering)
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import {useState, useEffect} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  //Adding user to check if currenseee should allow to let the user sign out or not
  const [user, setUser] = useState(null);
  //This contains the information about current user signed in
  useEffect(() => {
    //Checks for any changes in the current signed in user, sets to null if user is signed out
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          // User is signed in.
          setUser(authUser);
        } else {
          // User is signed out.
          setUser(null);
        }
      });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/ResourcesPage">ResourcesPage</Link>
      <Link to="/SavedCurrencyConversions">Saved Conversions</Link>
      <Link to="/CurrencyHistory">Currency History</Link>
      <Link to="/Contact">Contact Us</Link>
      <Link to="/HeatMap">Heat Map</Link>
      {user && <button className="but" onClick={handleSignOut}>Sign Out</button>}
      {/* <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
      <Link to="/page4">Page 4</Link> */}
    </nav>
  );
}

export default Navbar;
