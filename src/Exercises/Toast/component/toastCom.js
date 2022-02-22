import React from 'react'
import './styles.css'

const ToastCom = ({text, state, toastClass}) => {
  return (
    <div>
        <div className={toastClass}>
            <h2>{text}</h2>
            <button onClick={()=>state(false)}>Hide Toast</button>
        </div>
    </div>
  )
}

export default ToastCom