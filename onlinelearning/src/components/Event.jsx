import React from 'react'

const Event = () => {

    // function handleClick(){
    //     alert("Hello This for Test")
    // }
  return (
    <div>
      {/* <button onClick={handleClick}>Click Me</button> */}

      <button className='border solide m-4' onClick={()=>{alert("Hello Samad")}}>Click me</button>
    </div>
  )
}

export default Event
