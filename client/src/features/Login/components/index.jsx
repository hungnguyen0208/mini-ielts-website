import React, { useState } from 'react'
import email_icon from '../../../assets/images/email.png'
import password_icon from '../../../assets/images/password.png'
import user_icon from '../../../assets/images/user.png'
import './styles.css'

function LoginSignup() {

    const [action, setAction] = useState("Login");

    const handleClickSignUp = () => {
        setAction("Sign Up");
    }

    const handleClickLogin = () => {
        setAction("Login");
    }

    return (
        <div>
            <form id="signupForm">
                <div>{action}</div>
                {action === "Login" ? <div></div> : <div>
                    <img src={user_icon} alt="user icon" />
                    <input type='text' id='name' placeholder='Name' required></input>
                </div>}
                <div>
                    <img src={email_icon} alt="email icon" />
                    <input type='email' id='email' placeholder='Email' required></input>
                </div>
                <div>
                    <img src={password_icon} alt="password icon" />
                    <input type='password' id='password' placeholder='Password' required></input>
                </div>
                <button type='button'>Submit</button>
                <div>Lost Password? <span>Click Here!</span> </div>
                <div onClick={handleClickSignUp}>Sign Up</div>
                <div onClick={handleClickLogin}>Login</div>
            </form>
        </div>
    )
}

export default LoginSignup