import { authDataValidate } from "../Validation/auth.validation.js";

export const AuthSignupData = (req, res, next) => {
  const { error } = authDataValidate.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Data is not valid", details: error.details });
  }
  next(); 
};
