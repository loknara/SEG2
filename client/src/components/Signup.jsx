//Page was created by sid
//Successfully signs up user into firebase, currently API is not connected due to security provisions
//Does user verification and handles other errors


import React from 'react';
import './Signup.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";



export default function Signup(){
    //State Objects which constantly tracks users data to submit with sign up is clicked
    const Navigate= useNavigate()
    const [formData , setFormData] = useState(
        {
            userName:"",
            password:"",
            retype:"",
            matched: false
        }
    )
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false) //Makes sure that button cannot be clicked when signup is in processed
    //Does user info verification and signs user up
    async function handleSubmit(e){
        e.preventDefault()
        
        if(formData.password !== formData.retype){
            return setError("Passwords do not match")
        }
        try {
            //Tries the Request by creating a new account in firebase
            setLoading(true);
            console.log("Button clicked, Request sent: " + loading)
            const userCredential = await createUserWithEmailAndPassword(auth, formData.userName, formData.password);
            console.log(userCredential);
            Navigate('/')
            
        } catch (error) {
            console.error(error);
            setError(error.message);
        }

        setLoading(false)

    }
    //Tracks form data
    function handleChange(event){
        console.log(formData)
        const {name , value} = event.target
        if (value.includes(' ')){
            return
        }
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value,
                matched:  (formData.password === formData.retype)
            }
        })
        console.log(formData.matched)
        console.log('Updated formData:', formData);
    }


    return(
        <div className='loginBody'>
            <div className='header'>
                <h1 >CURRENSEE</h1>
            </div>
            <div className='signupForm'>
                {error}
                <label htmlFor="username">Email:</label>
                <input className="tester" type='text'placeholder='Username' name='userName' value={formData.userName} onChange={handleChange}></input>
                <label htmlFor="password">Password:</label>
                <input type='password' placeholder='Password' name='password' value = {formData.password} onChange={handleChange}></input>
                <label htmlFor="password">Retype Password:</label>
                <input type='password' placeholder='Retype Password' name='retype' value = {formData.retype} onChange={handleChange}></input>
                <div className='buttons'>
                    <button className='button' onClick={handleSubmit} disabled={loading}>Signup</button>
                </div>
                <div className='centerText'>Already have an account? <Link to="/Login">Login</Link></div>
            </div>
        </div>
    )
}