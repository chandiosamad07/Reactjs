import React from 'react'

const Event = () => {

    function handleClick(){
        alert("Hello This for Test")
    }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Event
