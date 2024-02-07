import React from 'react'

const Greating = (props) => {
  return (
    <div>
       <h1>Hello, {props.name}!</h1>
      <p>{props.message}</p>
    </div>
  )
}

export default Greating
