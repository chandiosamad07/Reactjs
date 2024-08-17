import React, { useState } from 'react'

const Counter = () => {
    const [count ,setCount] = useState(0)

const   FiveTime = ()=>{
        for(let i =0;i<5;i++){
            setCount(preCount => preCount+1)
        }
    }
    
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Click me  {count}</button>
      <br />
      <button onClick={FiveTime}>Inc 5 time  {count}</button>
    </div>
  )
}

export default Counter
