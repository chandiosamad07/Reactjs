import React from 'react'

const Product = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>price : ${props.price}</p>
      <p>Description: {props.description}</p>

      
    </div>
  )
}

export default Product
