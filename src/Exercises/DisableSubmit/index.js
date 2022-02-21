import React, { useState } from 'react'
import './styles.css'

const DisableSubmit = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleClick(){
      console.log(password)
  }
  return (
    <div>
        <h2>Disable Submit</h2>
        <label>Enter Password: 
            <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
        </label>
        <div>
         <label>Enter Password Again: 
            <input type='password' onChange={(e)=>setConfirmPassword(e.target.value)}></input>
         </label>
        </div>
        <div>
          <button disabled={password === confirmPassword ? false:true} onClick={handleClick}>Submit</button>
        </div>
    </div>
  )
}

export default DisableSubmit