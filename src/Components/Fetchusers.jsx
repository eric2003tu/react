import React, { useState,useEffect } from 'react';
function Fetchusers(){
    const [user,setUser] = useState([]);
    useEffect(function(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(response){
        if(!response.ok){
          if(response.status === 404){
            throw new Error("No users");
          }
          else if(response.status === 500){
            throw new Error("internal server error");
          }
        }
        return response.json();
      })
      .then(function(data){
        setUser(data);
      })
      .catch(function(error){
        console.error("an error occured", error);
      })
    },[]);
    return(
      <>
      <div className='mt-[100px]'>
        <h1>Users</h1>
        <ul className='justify-items-start'>
          {user.map(function(user){
            return(
            <li key={user.id}><strong>{user.name}</strong><br/>
            <span>Email :</span>{user.email}<br/>
            <span>Address</span>${user.address.city},${user.address.street}, ${user.address.zipcode},${user.address.suite}
            </li>);
          })}
        </ul>
        
      </div>
      <div id='footer' className="max-w-[100%]">
      <div id="footer" className="bg-[#a59c9c] max-w-[100%] left-0 right-0 w-full p-4 text-center absolute">
      <p className="font-bold text-center">© 2025 E-library. All Rights Reserved.

      </p>
</div>
</div>
      </>
    )
  }
  export default Fetchusers;