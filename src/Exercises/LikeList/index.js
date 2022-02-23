import React, { useState } from 'react'
import './styles.css'

const List = [
    {
        id: 1,
        name: 'Momos',
        count: 0
    },
    {
        id: 2,
        name: 'Pizza',
        count: 0
    },
    {
        id: 3,
        name: 'Burger',
        count: 0
    },{
        id: 4,
        name: 'Pasta',
        count: 0
    }
]

const LikeList = () => {
    const [list, setList] = useState(List);

 const likeHandler = (itemId) =>{
   setList(list.map((item)=>{
       if(item.id === itemId){
           return {...item, count: item.count+1};
       }else{
           return item;
       }
   }))
}
  return (
    <div>
        <h2>Like Counter</h2>
        {list.map((item)=>{
            return (
                <p>{item.name}<span><button style={{marginLeft: '1rem'}} onClick={()=>likeHandler(item.id)}>Like {item.count}</button></span></p>
            )
        })}
    </div>
  )
}

export default LikeList