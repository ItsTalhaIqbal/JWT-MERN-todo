import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLogin, logOut } from "../utils/auth";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", email: "" });

  const navigation = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
      const loggedIn = await isLogin();
      if (loggedIn.auth) {
        setUser(loggedIn.data);
      } else {
        navigation("/login");
      }
    };
    authenticate();
  }, []);


  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("http://localhost:3000/api/student");
      const { data } = res.data;
      setStudents(data);
      console.log(data);
    };
    getUsers();
  }, []);

  const handleLogout = () => {
    logOut();
    navigation("/login");
    alert("Logout SuccessFull");
  };
  return (
    <div className="flex justify-center mt-8">
      <div className="w-full max-w-[600px]">
        <div className="flex justify-between">
          <Link
            to="/create-student"
            className="w-[150px] h-[50px] bg-gray-600 text-center text-white mb-4 p-3 rounded"
          >
            Create Users
          </Link>
          <div className="flex gap-2">
            <h3>Hi ,<span className="font-semibold text-lg">{user.name}</span></h3>
            <button
              className="w-[100px] h-[50px] bg-gray-600 text-white mb-4 p-3 rounded cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
        <table className="w-full border-collapse mt-10">
          <thead>
            <tr className="gap-[10px] text-[20px]">
              <th className="w-[200px] border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.email}</td>
                <td className="border p-2">{student.phone}</td>
                <td className="border p-2">
                  <Link
                    to={`/edit-student/${student._id}`}
                    className="cursor-pointer bg-gray-600 p-1 rounded ml-2"
                  >
                    ✏
                  </Link>
                  <Link
                    to={`/delete-student/${student._id}`}
                    className="cursor-pointer bg-gray-600 p-1 rounded ml-2"
                  >
                    ❌
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
