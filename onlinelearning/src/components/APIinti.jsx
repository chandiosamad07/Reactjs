import { data } from "autoprefixer";
import { useState ,useEffect } from "react"
import React from 'react'

const APIinti = () => {
    const [post , setPost] =useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data =>setPost(data)).catch(error => console.log("Error fetching",error));

    },[])
  return (
    <div className='m-4 p-4'>
    <h1>API Posts</h1>
    <ul>
        {post.map(post =>(
            <li key={post.id}>
                <h2 >{post.title}</h2>
                <p >{post.body}</p>
            </li>
        ))}
    </ul>
</div>
  )
}

export default APIinti