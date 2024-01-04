import React, { useState } from 'react'

const Mybutton = () => {
    const [count , setCount] = useState(0)
    function handleClick(){
        // alert("you Clicked me")
        setCount(count+1)
    }
  return (
    <div>
      <button onClick={handleClick}>count {count} times</button>
    
    </div>
  )
}

export default Mybutton
