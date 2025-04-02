import React, { useState } from 'react';

const UserForm = () => {
  const [user, setUser] = useState({
    name: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h1 className="text-xl font-bold">User Form</h1>
      
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Enter your age"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 m-3"
      />

      <div className="mt-4 text-lg">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
      </div>
    </div>
  );
};

export default UserForm;
