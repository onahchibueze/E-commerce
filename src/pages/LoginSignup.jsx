import React from 'react'
import './CSS/LoginSignup.css'
export const LoginSignup = () => {
    return (
        <div className='loginsignup'>

            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Adress' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already have an acount ? <span>Login here</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' />
                    <p>By continuing, agree to use the terms of use and pricacy properties</p>
                </div>
            </div>
        </div>
    )
}
