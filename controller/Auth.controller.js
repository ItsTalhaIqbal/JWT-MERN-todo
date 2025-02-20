import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../schema/user.schema.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const dbUser = await User.findOne({  });
    if (dbUser) {
      return res.status(400).send({ message: "Email already registerd" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const data = { name, email, password: hashedPassword };
    const newUser = await User.create(data);
    newUser.save();

    res.status(200).send({
      message: "User Created Susessfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        emailL: newUser.email,
      },
    });
  } catch (error) {
    res.status(400).send({ message: "Error Creating User", error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }
    if (!password) {
      return res.status(400).send({ message: "Password  is required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User Not Found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).send({
      message: "Login Sussessfull",
      token,
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const tokenAuth = async (req, res) => {
  const { token } = req.body;

  if (token) {


    try {

      const decrypt = jwt.verify(token, process.env.JWT_SECRET);
      res.json({
        auth: true,
        data: decrypt,
      });

    } catch (error) {

      res.json({
        auth: false,
        data: error.message,
      });
    }
  } else {

    res.json({
      auth: false,
      data: "No token found in request",

    });
  }
};
