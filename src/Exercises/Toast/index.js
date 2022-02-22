import React, { useState } from 'react'
import './styles.css'
import ToastCom from './component/toastCom';

const Toast = () => {
  const [showToast, setShowToast] = useState(false);

//   const handleClick = () =>{
//       setShowToast(!showToast)
//   }
  return (
    //   ----------BASIC-------------
    // <div>
    //     <h2>Toast Example</h2>
    //     {showToast ? 
    //     <div>
    //         <h3>Success</h3>
    //         <button onClick={()=>setShowToast(!showToast)}>Hide Toast</button>
    //     </div>:
    //     <button onClick={handleClick}>Show Toast</button>}
    // </div>

    // ---------CHALLENGE-------------
    <div>
        <h2>Toast Example</h2>
        <div>
          <button onClick={()=>setShowToast(true)}>Show Toast</button>(success)
          {showToast && <ToastCom text={"success"} state={setShowToast} toastClass={"success"} />}
        </div>
        
        {/* <div>
          <button onClick={()=>setShowToast(true)}>Show Toast</button>(error)
          {showToast && <ToastCom text={"error"} state={setShowToast} toastClass={"error"} />}
        </div> */}

        {/* <div>
          <button onClick={()=>setShowToast(true)}>Show Toast</button>(warning)
          {showToast && <ToastCom text={"warning"} state={setShowToast} toastClass={"warning"}/>}
        </div> */}
    </div>
  )
}

export default Toast