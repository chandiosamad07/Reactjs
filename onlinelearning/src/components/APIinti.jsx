import { useState, useEffect } from "react";
import React from "react";

const APIinti = () => {
  const [post, setPost] = useState([]);

//first Method to API integrate
// useEffect(()=>{
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => setPost(data))
// .catch(error => console.error("error fetching" , error));
// },[])


useEffect(()=>{
const fetchAPI = async () =>{
    try{
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    if(!response.ok){
        throw new Error ("Failed to fetch data")
    }
    const josnData = await response.json();
    setPost(josnData);

    }
    catch{
        console.log("API Getting Error " , Error.message)
    }
}
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
