import React from 'react';
import './Signup.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Signup(){
    
    const [formData , setFormData] = useState(
        {
            userName:"",
            password:"",
            retype:"",
            matched: false
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
                [name] : value,
                matched:  (formData.password === formData.retype)
            }
        })
        console.log(formData.matched)
    }


    return(
        <div className='loginBody'>
            <div className='header'>
                <div className='logo'> Logo goes here</div>
            </div>
            <div className='signupForm'>
                <label htmlFor="username">Username:</label>
                <input type='text'placeholder='Username' name='userName' value={formData.userName} onChange={handleChange}></input>
                <label htmlFor="password">Password:</label>
                <input type='password' placeholder='Password' name='password' value = {formData.password} onChange={handleChange}></input>
                <label htmlFor="password">Retype Password:</label>
                <input type='password' placeholder='Retype Password' name='retype' value = {formData.retype} onChange={handleChange}></input>
                <div className='buttons'>
                    <button className='button'>Login</button>
                </div>
                <div className='centerText'>Already have an account? <Link to="/Login">Login</Link></div>
            </div>
        </div>
    )
}