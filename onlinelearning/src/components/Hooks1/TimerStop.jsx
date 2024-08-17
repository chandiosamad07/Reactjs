import React, { useEffect, useState } from 'react'

const TimerStop = () => {
    const [count , setCount ]=useState(0)
    
    useEffect(()=>{
        const interval = setInterval (()=>{
            setCount(count => {
                if(count >=10){
                    clearInterval(interval)
                    return count
                }
               return count +1
            })
        },1000)
        return ()=>clearInterval(interval)
    },[])
  return (
    <div>
      Timer {count}
    </div>
  )
}

export default TimerStop
