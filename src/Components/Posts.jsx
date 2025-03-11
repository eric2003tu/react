import React, { useState,useEffect } from 'react';
function Posts() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);
  
    return (
      < div>
      <div className='mt-[100px]'>
        <h1>Posts</h1>
        <ul className='grid grid-cols-1 justify-self-start justify-start'>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>          
              <button type='button' className='like-button' onClick={function(){
            }}>Like</button>
            </li>
          ))}
        </ul>
      </div>
      <div id='footer' className="max-w-[100%]">
      <div id="footer" className="bg-[#a59c9c] max-w-[100%] left-0 right-0 w-full p-4 text-center absolute">
      <p className="font-bold text-center">© 2025 E-library. All Rights Reserved.</p>
     </div>
   </div>
      </div>
    );
  }
 
  export default Posts;