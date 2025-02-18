import { Router } from "express";
import {
  CreateStudent,
  DeleteStudent,
  GetAllStudent,
  GetStudent,
  UpdateStudent,
} from "../controller/student.controller.js";
import { ValidateStudent } from "../middlewares/student.middleware.js";

const student = Router();

student.post("/student",ValidateStudent, CreateStudent);
student.get("/student", GetAllStudent);
student.put("/student/:id",ValidateStudent, UpdateStudent);
student.delete("/student/:id", DeleteStudent);
student.get("/student/:id", GetStudent);

export { student };
