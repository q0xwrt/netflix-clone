import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'


const Login = () => {

  const [signEstate, setSignEstate] = useState('Sign In')


  return (
    <div className='login'>
     <img src={logo} alt="" className='login-logo' />
     <div className="login-form">
        <h1>{signEstate}</h1>
        <form action="">
          {signEstate === 'Sign Up' ? <input type="text" placeholder='Your Name' /> : <></>}
          
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>{signEstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor=''>Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signEstate === 'Sign In' 
          ?
          <p>New to Netflix? <span onClick={() => {setSignEstate('Sign Up')}}>Sign Up Now</span></p>
          :
          <p>Already have acount? <span onClick={() => {setSignEstate('Sign In')}}>Sign In Now</span></p>
          }
          
        </div>
     </div>
    </div>
  )
}

export default Login
