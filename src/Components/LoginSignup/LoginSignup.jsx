import React, { useState } from 'react'
import './LoginSignup.css'
import image1 from '../assets/email.png'
import image2 from '../assets/password.png'
import image3 from '../assets/person.png'

const LoginSignup = () => {
  const[action,setaction]=useState("Sign Up");
  
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
       </div>
      <div className="inputs">
        {action==="Login"?<div></div>:  <div className="input">
          <img src={image3} alt="" />
          <input type="text" placeholder='Name' />
        </div>}
       
        <div className="input">
          <img src={image1} alt="" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src={image2} alt="" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?<span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup