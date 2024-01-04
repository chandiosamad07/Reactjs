import React from 'react'

const Mybutton = () => {
    function handleClick(){
        alert("you Clicked me")
    }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Mybutton
