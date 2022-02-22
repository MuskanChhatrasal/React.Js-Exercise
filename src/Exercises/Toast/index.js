import React, { useState } from 'react'
import './styles.css'

const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () =>{
      setShowToast(!showToast)
  }
  return (
    <div>
        <h2>Toast Example</h2>
        {showToast ? 
        <div>
            <h3>Success</h3>
            <button onClick={()=>setShowToast(!showToast)}>Hide Toast</button>
        </div>:
        <button onClick={handleClick}>Show Toast</button>}
    </div>
  )
}

export default Toast