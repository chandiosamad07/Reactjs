import React, { useEffect, useState } from 'react'

const ApiIntegration = () => {
    const [post , setPost] = useState([])

    useEffect(()=>{
        const fetchAPI = async()=>{
            try{
                let response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=2')
                if(!response.ok){
                    throw new console.error("Response not ok");
                }
                let result = await response.json()
                setPost(result)
            }
            catch{

            }
        }
        fetchAPI()
    },[])
    console.log(post)
  return (
    <div>
    
     {post.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
    </div>
  )
}

export default ApiIntegration
