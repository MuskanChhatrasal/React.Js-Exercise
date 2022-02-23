import React, { useState } from 'react'
import './styles.css'

const DarkMode = () => {
  const [darkMode,setDarkMode] = useState(false)

  function toggleHandler(text){
     if(text === "dark"){
         setDarkMode(false);
     }else{
         setDarkMode(true);
     }
  }
  return (
    <div className={darkMode ? 'darkMode':'lightMode'}>
        <h2>Dark Mode</h2>
        {darkMode ? <button className='darkMode' onClick={()=>toggleHandler("dark")}>Light Mode</button>:<button className='lightMode' onClick={()=>toggleHandler("light")}>Dark Mode</button>}
    </div>
  )
}

export default DarkMode