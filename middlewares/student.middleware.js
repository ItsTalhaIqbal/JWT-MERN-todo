import { StudentDataValidate } from "../Validation/student.validation.js";

export const ValidateStudent = (req, res, next) => {
  const { error } = StudentDataValidate.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Data is not valid", details: error.details });
  }
  next(); 
};
