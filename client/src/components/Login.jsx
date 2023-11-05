import React from 'react';
import './Login.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Login(){
    
    const [formData , setFormData] = useState(
        {
            userName:"",
            password:""
        }
    );

    function handleChange(event){
        console.log(formData)
        const {name , value} = event.target
        if (value.includes(' ')){
            return
        }
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        }) 
    }


    return(
        <div className='loginBody'>
            <div className='header'>
                <div className='logo'> Logo goes here</div>
            </div>
            <div className='loginForm'>
                <label htmlFor="username">Username:</label>
                <input type='text'placeholder='Username' name='userName' value={formData.userName} onChange={handleChange}></input>
                <label htmlFor="password">Password:</label>
                <input type='password' placeholder='Password' name='password' value = {formData.password} onChange={handleChange}></input>
                <div className='buttons'>
                    <button className='button'>Login</button>
                </div>
                <div className='centerText'>Need an account? <Link to="/Signup">Sign Up</Link></div>
            </div>
        </div>
    )
}