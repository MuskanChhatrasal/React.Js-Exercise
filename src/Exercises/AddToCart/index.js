import React from 'react'
import './styles.css'
import { v4 as uuidv4 } from 'uuid';

const AddToCart = () => {
  const obj = [
    {
      id: uuidv4(),
      name: 'strawberry',
      price: 100,
    },
    {
      id: uuidv4(),
      name: 'cherry',
      price: 80,
    },
    {
      id: uuidv4(),
      name: 'blueberry',
      price: 120,
    }
  ]
  
  function handleClick(id){
    var itemId = id;
    console.log(itemId);
  }

  // function displayProduct(id){
  //   return (
  //   <ul>
  //     <li>
  //       {obj.filter(item => item.id === id)}
  //     </li>
  //   </ul>
  //   )
  // }
  return (
    <div>
        <h2>Add To Cart</h2>
        <ul>
          {obj.map((item)=>{
            return (
              <div key={item.id}>
                <li>{item.name} | Price: {item.price}</li>
                <button onClick={()=>handleClick(item.id)}>Add to Cart</button>
              </div>
            )
          })}
        </ul>

        {/* <h2>Your Cart: </h2>
        {displayProduct()}; */}
    </div>
  )
}

export default AddToCart