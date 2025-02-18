import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isLogin } from "../utils/auth";

const UpdateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { _id } = useParams();

  useEffect(() => {
    const authenticate = async () => {
      const loggedIn = await isLogin();
      if (!loggedIn.auth) {
        navigate("/login");
      }
    };
    authenticate();
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/student/${_id}`)
      .then((res) => {
        const { data } = res.data;
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
      })
      .catch((err) => console.error("Error fetching user data:", err));
  }, [_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, phone };
    try {
      const res = await axios.put(
        `http://localhost:3000/api/student/${_id}`,
        data
      );
      console.log("response", res);

      setName("");
      setEmail("");
      setPhone("");
      navigate("/");
    } catch (err) {
      console.error("Error updating Student data:", err);
    }
  };

  return (
    <>
      <h1 className="flex justify-center text-4xl mt-4">Update Student</h1>
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

export default UpdateStudent;
