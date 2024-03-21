import React,{useState ,useEffect} from 'react'

const Effect = () => {
    const [post , setPost] = ([])
    
    useEffect(()=>{
        const fetchdata = async ()=>{
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        if(!response.ok){
            throw new Error;
        }
        const jsonData = await response.json();
        setPost(jsonData);
      }
      catch{
        console.log("API fetching error" ,Error)
      }

        }
    },[])
  return (
    <div>
        <h1 className='p-4'> API POST</h1>
        {post.map(post=>(
        <p key={post.id}>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>
    </p>
        
        ))}
    </div>
  )
}

export default Effect