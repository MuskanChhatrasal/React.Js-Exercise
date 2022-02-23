import React,{useState} from 'react'
import './styles.css'

const items = [
  {
    id: 1,
    name: 'Strawberry',
    count: 0,
  },
  {
    id: 2,
    name: 'cherry',
    count: 0,
  },
  {
    id: 3,
    name: 'lichi',
    count: 0,
  },
  {
    id: 4,
    name: 'blueberry',
    count: 0,
  }
]
const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const filterItems = (items, itemId) => items.filter((item) => item.id === itemId);

  const addToCart = (itemId) =>{
    let updatedCart;
    if(filterItems(cartItems, itemId).length>0){
      updatedCart = cartItems.map((item)=>{
        if(item.id === itemId){
          return {
            ...item, count: item.count+1
          };
        }
        return item;
      })
    }else{
      let item = filterItems(items, itemId)[0];
      updatedCart = [...cartItems, item];
    }
    setCartItems(updatedCart);
  }

  const removeFromCart = (itemId) =>{
    let updatedCart = cartItems.reduce((acc, item) =>{
      if(item.id === itemId){
        if(item.count > 1){
            acc.push({...item, count: item.count-1})
        }
      }else{
        acc.push(item)
      }
      return acc;
    }, [])
    setCartItems(updatedCart);
  }
  return (
    <div>
     <h2>Add To Cart App</h2>
     <ul>
       {items.map((item)=>{
         return(
           <li>{item.name}
           <button onClick={()=>addToCart(item.id)}>Add To Cart</button>
           </li>
         )
       })}
      </ul>
      <h2>Cart Items: </h2>
      <ul>
        {cartItems.map((item)=>{
          return (
            <li>{item.name}
            <button onClick={()=>addToCart(item.id)}>+</button>
            {item.count}
            <button onClick={()=>removeFromCart(item.id)}>-</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AddToCart