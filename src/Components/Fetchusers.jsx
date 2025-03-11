import React, { useState, useEffect } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("No users");
          } else if (response.status === 500) {
            throw new Error("Internal server error");
          }
        }
        return response.json();
      })
      .then(function (data) {
        setUsers(data);
      })
      .catch(function (error) {
        console.error("An error occurred", error);
      });
  }, []);

  return (
    <>
      <div className="mt-[100px] lg:w-full md:w-full sm:w-full">
        <h1>Users</h1>
        <table className="border-collapse border-2 border-gray-500 mb-[15px] lg:w-full md:w-fit sm:w-full ">
          <thead className="lg:w-full md:w-fit sm:w-full">
            <tr className="bg-gray-300 lg:w-full md:w-fit sm:w-full">
              <th className="border border-gray-500 p-1">USERNAME</th>
              <th className="border border-gray-500 p-1">EMAIL</th>
              <th className="border border-gray-500 p-1">ADDRESS</th>
            </tr>
          </thead>
          <tbody className="lg:w-full md:w-fit sm:w-full">
            {users.map((user) => (
              <tr key={user.id} className="border border-gray-500 lg:w-full md:w-fit sm:w-full">
                <td className="border border-gray-500 p-1">
                  <strong>{user.name}</strong>
                </td>
                <td className="border border-gray-500 p-1">
                  <span>Email: </span>{user.email}
                </td>
                <td className="border border-gray-500 p-1">
                {user.address.city},{user.address.suite},{user.address.zipcode},{user.address.street}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div id="footer" className="max-w-[100%]">
        <div className="bg-[#a59c9c] max-w-[100%] left-0 right-0 w-full p-4 text-center absolute">
          <p className="font-bold text-center">© 2025 E-library. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default FetchUsers;
