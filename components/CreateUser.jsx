import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../utils/auth";
const CreateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
      const loggedIn = await isLogin();
      if (!loggedIn.auth) {
        navigate("/login");
      }
    };
    authenticate();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, phone };
    const res = await axios.post("http://localhost:3000/api/student", data);
    console.log(res);
    setName("");
    setEmail("");
    setPhone("");
    navigate("/");
  };

  return (
    <>
      <h1 className="flex justify-center text-4xl mt-4">Create Student</h1>
      <div className="flex justify-center mt-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="h-10 w-[200px] bg-gray-300 mb-3 p-2"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="h-10 w-[200px] bg-gray-300 mb-3 p-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="h-10 w-[200px] bg-gray-300 mb-3 p-2"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 mt-3 cursor-pointer"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateStudent;
