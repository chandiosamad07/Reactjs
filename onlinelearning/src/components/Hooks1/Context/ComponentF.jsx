import React from 'react'
import { useContext } from '../../../App'
const ComponentF = () => {
  return (
    <div>
    <useContext.Consumer>
        {
            user =>{
                return <div>user conext value user hello  {user}</div>
            }
        }
    </useContext.Consumer>
    
    </div>
  )
}

export default ComponentF
