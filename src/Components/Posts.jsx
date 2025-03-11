import React, { useState, useEffect } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState({}); // Object to track like/unlike per post

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div><div className="mt-[100px]">
 <h1 className="font-bold text-[20px]">Posts</h1>
 <ul className="grid grid-cols-1 justify-self-start justify-start">
 {posts.map((post) => {
 const like = likes[post.id]?.like || false;
 const unlike = likes[post.id]?.unlike || false;

return (
<li
  key={post.id}
  className="border-1 border-gray-500 p-[10px] mb-[15px] rounded-[5px] justify-items-start">
  <h2 className="font-bold text-blue-600">{post.title}</h2>
  <p className="justify-self-start">{post.body}</p>
  <button type="button" className="flex space-x-3">
      <AiOutlineLike size={30} onClick={() => setLikes((prev) => ({
      ...prev,
      [post.id]: { like: true, unlike: false },
      }))
      } className={ like ? "cursor-pointer text-green-600" : "cursor-pointer text-black"}/>
      <AiOutlineDislike size={30} onClick={() =>
      setLikes((prev) => ({
      ...prev,
      [post.id]: { like: false, unlike: true },
      }))}
     className={unlike ? "cursor-pointer text-red-500" : "cursor-pointer text-black"}/>
   </button>
   <FaRegComment size={30} className=" ml-auto cursor-pointer"/>
  </li>
            );
          })}
        </ul>
      </div>

      {/* Footer */}
      <div id="footer" className="max-w-[100%]">
        <div className="bg-[#a59c9c] max-w-[100%] left-0 right-0 w-full p-4 text-center absolute">
          <p className="font-bold text-center">
            © 2025 E-library. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Posts;
