import React, {useState} from 'react'
import './styles.css'

const ShowPassword = () => {
  const [hidden, setHidden] = useState(true)

  
  return (
    <div>
        <h2>Show Password</h2>
        <label>Enter Password: 
            <input type={hidden ? 'password':'text'}></input>
        </label>
        <button onClick={()=>setHidden(!hidden)}>{hidden ? 'ShowPassword' : 'HidePassword'}</button>
    </div>
  )
}

export default ShowPassword