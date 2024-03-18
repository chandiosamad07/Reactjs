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

  const fetchApidata = async()=>{
    try{
        const respone = await fetch ("https://jsonplaceholder.typicode.com/posts")
        if(!respone.ok){
            throw new Error('Failed to fetch data');
        }
        const JsonData = await respone.json()
        setPost(JsonData)
        console.log(JsonData , "This json data")
    }
    catch{
        console.log("Geting this error from API")
    }
  }
  fetchApidata();

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
