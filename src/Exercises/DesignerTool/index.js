import React, { useState } from 'react'
import './styles.css'

const DesignerTool = () => {
  const [font, setFont] = useState(8);

  function IncrementFont(){
      setFont(font + 8)
  }

  function DecrementFont(){
      setFont(font - 8)
  }

  return (
    <div>
        <h2>Designer Tool(Small Figma)</h2>
        <p style={{fontSize: `${font}px`}}>Example Text</p>
        <button onClick={IncrementFont}>+8px</button>
        <button onClick={DecrementFont}>-8px</button>
    </div>
  )
}

export default DesignerTool