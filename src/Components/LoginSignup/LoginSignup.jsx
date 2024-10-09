import React, { useState } from 'react'
import person from '../../assets/person.png'
import email from '../../assets/email.png'
import password from '../../assets/password.png'
import './LoginSignup.css'
const LoginSignup = () => {

    const [action, setAction] = useState("Login")
  return (
    <div className="ls-container">
        <div className="ls-header">
            <div className="text">{action}</div>
        </div>
        <div className="lsinputs">
        {action==="Login"?<div></div>: <div className="ls-input">
                <img src={person} alt="" />
                <input type="text" name="name" id="name" placeholder='Name'/>
            </div>}
            <div className="ls-input">
                <img src={email} alt="" />
                <input type="email" name="email" id="email" placeholder='Email Id'/>
            </div>
            <div className="ls-input">
                <img src={password} alt="" />
                <input type="email" name="password" id="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password <span>Click here</span></div>}
        <div className="submit-button">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>Sign up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup