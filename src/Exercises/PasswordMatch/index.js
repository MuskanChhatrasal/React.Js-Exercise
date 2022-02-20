import React, { useState } from 'react'
import './styles.css'

const PasswordMatch = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
//   const passwordChecker = () => password === confirmPassword ? <p>SuccessFull Login</p>:<p>Error</p>;
  return (
    <div>
        <h2>Password Match</h2>
        <label className='label1'>Password: 
            <input type='password' className='input1' onChange={(e)=>setPassword(e.target.value)}></input>
        </label>
        <br></br>
        <label>Confirm Password: 
            <input type='password' className='input2' onChange={(e)=>setConfirmPassword(e.target.value)}></input>
        </label>
        {/* <div>
            <button onClick={passwordChecker} style={{marginTop: '2rem'}}>Submit</button>
        </div> */}
        {password === confirmPassword ? <p>SuccessFull login</p>:<p>Error: Password Doesn't Match</p>}
        
    </div>
  )
}

export default PasswordMatch