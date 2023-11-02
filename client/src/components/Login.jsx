import React from 'react';
import './Login.css';
import {useState} from 'react';

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
                <input type='text'placeholder='Username' name='userName' value={formData.userName} onChange={handleChange}></input>
                <input type='password' placeholder='Password' name='password' value = {formData.password} onChange={handleChange}></input>
                <div className='buttons'>
                    <div className='button'>Login</div>
                    <div className='button'>Signup</div>
                </div>
            </div>
        </div>
    )
}