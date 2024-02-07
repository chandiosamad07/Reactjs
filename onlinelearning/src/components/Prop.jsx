import React from 'react'
import Greating from './Greating'
import Product from './Product'
const Prop = () => {
  return (
    <div>
      <Greating name="Alice" message="Welcome to our website!" />
      <Greating name="Bob" message="Enjoy your stay!" />
    
      <h1>Our Products</h1>
      <Product name="Laptop" price={999.99} description="A powerful laptop for all your computing needs." />
      <Product name="Smartphone" price={699.99} description="Stay connected with our latest smartphone." />
      <Product name="Headphones" price={99.99} description="Immerse yourself in your favorite music with our premium headphones." />
    </div>
  )
}

export default Prop
