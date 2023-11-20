//This page was made by sid.
//Adds functionality to the login page, multiple test cases being integrated into authentication and functionality
//Test Case: Allows the user to login through fire base or displays error if error occurs


// This login currently works, use Email:Test@gmail.com  password: "Password"    to test this information
import React from 'react';
import './Login.css';
import {useState,  useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext"
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";


export default function Login(){
    //Setting constants and states to use throughout the page
    const [error, setError] = useState(false);
    const [user, setUser] = useState(null);
    const [formData , setFormData] = useState( 
        {
            //Object which keeps track of the username and password
            userName:"",
            password:""
        }
    );
    const {dispatch} = useContext(AuthContext)// Code for later use
    const navitage = useNavigate()

    useEffect(() => {
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

    function handleChange(event){
        console.log(formData)
        const {name , value} = event.target
        if (value.includes(' ')){
            return
        }
        //Handles change and updates formData state
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        }) 
    }
    //Logs existing users through firebase
    const handleLogin = (e) => {
        e.preventDefault()
    
        signInWithEmailAndPassword(auth, formData.userName, formData.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            navitage("/")
          })
          .catch((error) => {
            console.log(error)
            setError(true)
        })
    }

    return(
        <div className='loginBody'>
            <div className='header'>
                <div className='logo'> Logo goes here</div>
            </div>
            {user? "Logged in" : "Logged out"}
            {console.log(user)}
            <div className='loginForm'>
                <label htmlFor="username">Email:</label>
                <input type='text'placeholder='Email' name='userName' value={formData.userName} onChange={handleChange}></input>
                <label htmlFor="password">Password:</label>
                <input type='password' placeholder='Password' name='password' value = {formData.password} onChange={handleChange}></input>
                <div className='buttons'>
                    <button className='button' onClick={handleLogin}>Login</button>
                </div>
                {error && <span>Wrong email or password!</span>}
                <div className='centerText'>Need an account? <Link to="/Signup">Sign Up</Link></div>
            </div>
        </div>
    )
}