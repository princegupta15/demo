import React, { useState } from 'react'
export const Login = (props) => 
{
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div classname="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlfor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="youremail@gmail.com"
             id="email" name="email" />
             <label htmlfor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********"
             id="password" name="password" />
             <button TYPE="submit">Log In</button>
        </form>
        <button className="link-btn" onclick={props.onFormSwitch}>Dont have an account? Register here.</button>
   </div>
    )
}