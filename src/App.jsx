
import { BrowserRouter,  Route, Routes } from "react-router";

import "./App.css";
import CreateUser from "../components/CreateUser";
import UpdateUser from "../components/updateUser";
import Home from "../components/Home";
import DeleteUser from "../components/DeleteUser";
import Login from "../components/Login";
import Signup from "../components/Signup";


function App() {

 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-student" element={<CreateUser />} />
        <Route path="/delete-student/:_id" element={<DeleteUser />} />
        <Route path="/edit-student/:_id" element={<UpdateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
