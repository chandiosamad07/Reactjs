import React , {useState,useEffect} from 'react'

const Timer = () => {
    const [count ,setCount] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(count => count+1)
        },1000)

        return ()=> clearInterval(interval)
    },[])
  return (
    <div>
      <p>Timer : {count} seconds</p>
    </div>
  )
}

export default Timer
