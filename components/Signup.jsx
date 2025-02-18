import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit =async(e) => {
    e.preventDefault()
    const data={name,email,password}

    await axios.post("http://localhost:3000/api/signup",data)
    .then((res)=>{
      alert("Account Created Successfully , Please Login")
    })
    .catch((error)=>{
      alert(error)
    })
    navigate('/login')

  };
  return (
    <div className="w-[500px] h-[400px] border   mx-auto   mt-[200px]">
    <h2 className="text-4xl font-bold text-center mt-[50px]">Sign Up</h2>
    <p className="text-lg  text-center">Create An Account</p>
    <div className="mt-4 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-4"
      >
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-200 border w-[300px] mx-auto p-1 rounded"
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-200 border w-[300px] mx-auto p-1 rounded"
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-200 border w-[300px] mx-auto p-1 rounded"
        />
        
          <p className="mx-auto">Already Have an Account?<Link to={'/login'} className=" text-blue-500 hover:text-blue-800">LogIn</Link></p>
        

          <button
            type="submit"
            className="bg-black text-white cursor-pointer p-2 rounded w-[100px] mx-auto"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
