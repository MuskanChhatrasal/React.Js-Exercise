import React, { useState } from 'react'
import './styles.css';


const TwitterCounter = () => {
  const[count,setCount] = useState(50);

  const handleChange = (e) =>{
      setCount(50 - e.target.value.length);
  }
  return (
    <div>
        <h2>Twitter Counter</h2>
        <textarea placeholder='Enter Your Text Here' rows={4} cols={46} onChange={(e)=>handleChange(e)}></textarea>
        <h3>Count: {count}</h3>
        <hr />
    </div>
  )
}

export default TwitterCounter