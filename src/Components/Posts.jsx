import React, { useState,useEffect } from 'react';
import { AiOutlineLike ,AiOutlineDislike} from "react-icons/ai";
function Posts() {
    const [posts, setPosts] = useState([]);
    const [like, setLike] = useState(false);
    const [unlike, setUnlike] = useState(false)
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);
  
    return (
      < div>
      <div className='mt-[100px]'>
        <h1 className='font-bold text-[20px]'>Posts</h1>
        <ul className='grid grid-cols-1 justify-self-start justify-start'>
          {posts.map(post => (
            <li key={post.id} className='border-1 border-gray-500 p-[10px] mb-[15px] rounded-[5px] justify-items-start'>
              <h2 className='font-bold text-blue-600'>{post.title}</h2>
              <p className='justify-self-start'>{post.body}</p>          
              <button type='button' onClick={function(){
            }} className="flex items-center space-x-3"><AiOutlineLike size={30} onClick={function(){ 
              setLike(true)
              setUnlike(false)
            }} className={like ===true ? 'cursor-pointer text-green-600 ' : 'text-black cursor-pointer'}/><AiOutlineDislike size={30} onClick ={function(){
              setUnlike(true)
              setLike(false)
            }} className={unlike === true ? 'cursor-pointer text-red-500':' cursor-pointer text-black'}/></button>
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