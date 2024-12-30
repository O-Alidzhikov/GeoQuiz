import React, { useState } from 'react';
import './register.css';
import * as userService from "../../services/userService";

function Register() {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const registerSubmitHandler = async (e) => {
        console.log(username,email,password,repeatPassword)
        e.preventDefault();
        try {
            const response = await userService.register(username,email, password, repeatPassword);
            console.log('Registration successful:', response);
            
        } catch (error) {
            console.error('Registration failed:', error);
           
        }
    };

    return (
        <>
            <div className="registerContainer">
                <div className="registerHeader">
                    <div className="registerText">Register</div>
                    <div className="registerUnderline"></div>
                </div>
                <div className="registerInputs">
                    <form className="register-form" onSubmit={registerSubmitHandler}>
                        <div className="registerInput">
                            <img src="" alt="" />
                            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="registerInput">
                            <img src="" alt="" />
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="registerInput">
                            <img src="" alt="" />
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="registerInput">
                            <img src="" alt="" />
                            <input type="password" placeholder="Repeat Password" onChange={(e) => setRepeatPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="register-submit">Register</button>
                    </form>
                </div>
                <div className="forgot-password">
                    Lost Password? <span>Click here!</span>
                </div>
                <div className="register-submit-container">
                    <div className="register-submit">Login</div>
                </div>
            </div>
        </>
    );
}

export default Register;