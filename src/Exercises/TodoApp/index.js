import React, { useState } from 'react'
import './styles.css'

const TodoApp = () => {
  const [items, setItems] = useState('');
  const [list, setList] = useState([]);
  

  function addItem(item){
    setList([...list,item])
  }

//   const filterItems = (list, itemId) => list.filter((item)=>item.id === itemId)
//   function strikeHandler(id){
//       let updatedList = filterItems(list,id);
//       console.log(updatedList)
//   }
  return (
    <div>
        <h2>Todo App</h2>
        <label>Enter Task: 
            <input type='text' onChange={(e)=>setItems(e.target.value)}></input>
            <button onClick={()=>addItem(items)}>Submit</button>
        </label>

        <h2>My TODO'S</h2>
        <ul>
            {list.map((item, index)=>{
                return(
                    <li key={index}>{item}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default TodoApp