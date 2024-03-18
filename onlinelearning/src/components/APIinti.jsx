import { useState, useEffect } from "react";
import React from "react";

const APIinti = () => {
  const [post, setPost] = useState([]);

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => setPost(data))
.catch(error => console.error("error fetching" , error));
},[])
  return (
    <div className="m-4 p-4">
     <h1>Post</h1>
     {post.map( post =>(
        <li key={post.id}>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
        </li>
     ))}
    </div>
  );
};

export default APIinti;
