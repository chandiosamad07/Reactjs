import { data } from 'autoprefixer';
import React, {useState , useEffect} from 'react'

const API = () => {
    const [post , setPosts] = useState([]);
    const [data , setData] = useState([]);
    //first method

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    //     .then(response => response.json())
    //     .then(data => setPosts(data))
    //     .catch(error => console.error('Error fetching posts: ', error));

    // },[])

    //second method to fetch API
    useEffect(()=>{
      const fetchData = async ()=>{
        try{
          const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
          if(!response.ok){
            throw new Error('Faild to data')
          }
          
        }
        catch{
          console.log('Error in fecting data')
        }
      }
      fetchData();
    })

    // useEffect(()=>{
    
    //   const fetchData = async ()=>{
    //     try{
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    //     if(!response.ok){
    //       throw new Error('Faild to fetch data')
    //     }
    //     const json = await response.json()
    //     setPosts(json)
    //         }
    //         catch{
    //           console.log('Error Fecting Data')
    //         }}
    //         fetchData()
    // },[])
  return (
    <div className='m-4 p-4'>
        <h1>API Posts</h1>
        {post.map( post =>(
        <p key={post.id}>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
        </p>
     ))}
    </div>
  )
}

export default API