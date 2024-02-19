import { data } from 'autoprefixer';
import React, {useState , useEffect} from 'react'

const API = () => {
    const [post , setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching posts: ', error));

    },[])
  return (
    <div>
        <h1>Posts</h1>
        <ul>
            {post.map(post =>(
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default API