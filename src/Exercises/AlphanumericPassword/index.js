
import React,{useState} from 'react'
import './styles.css'

const AlphaNumeric = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleClick(){
    const isChar = char => !isNaN(char);
    const isAlpha = char => ((char>='a' && char<='z') || (char>='A' && char<='Z'));
    if([...password].some(isChar) && ([...password].some(isAlpha))){
      setMessage('True')
    }else{
      setMessage('Password Not contain alphabet or a number')
    }
  }
  return (
    <div>
        <h2>AlphaNumeric Password</h2>
        <label>Enter Password: 
          <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
        </label>
        <div>
          <button className='btn' onClick={handleClick}>Submit</button>
        </div>
        <p>{message}</p>
    </div>
  )
}

export default AlphaNumeric