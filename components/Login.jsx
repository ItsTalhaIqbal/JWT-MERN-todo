import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAuthentication } from "../utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    await axios
      .post("http://localhost:3000/api/login", data)
      .then((res) => {
        setAuthentication(res.data.token);
        alert("Login Successfull");
      })
      .catch((error) => {
        alert(error);
      });
    navigate("/");
  };
  return (
    <div className="w-[500px] h-[400px] border   mx-auto   mt-[200px]">
      <h2 className="text-4xl font-bold text-center mt-[50px]">Login</h2>
      <p className="text-lg  text-center">Login To Your Account</p>
      <div className="mt-4 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-4"
        >
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
          <p className="mx-auto">
            Don't Have an Account?{" "}
            <Link
              to={"/signup"}
              className="mx-auto text-blue-500 hover:text-blue-800"
            >
              SignUP
            </Link>
          </p>

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

export default Login;
