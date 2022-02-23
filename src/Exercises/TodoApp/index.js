import React, { useState } from 'react'
import './styles.css'

const TodoApp = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  function clickHandler(){
      setList(item)
  }

  return (
    <div>
        <h2>Todo App</h2>
        <label>Enter Task: 
            <input type='text' onChange={(e)=>setItem(e.target.value)}></input>
            <button onClick={clickHandler}>Submit</button>
        </label>
    </div>
  )
}

export default TodoApp