import { StudentModel } from "../schema/student.schema.js";

export const CreateStudent = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const user = await StudentModel.create({ name, email, phone });
    res.status(200).send({ message: "User saved to database", user });
  } catch (error) {
    res.status(500).send({ error: "Unable to save user to database" });
  }
};

export const GetAllStudent = async (req, res) => {
  try {
    const data = await StudentModel.find();
    res.status(200).send({ message: "SUCCESS", data });
  } catch (error) {
    res.status(500).send({ error: "Unable to get users from database" });
  }
};

export const GetStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await StudentModel.findById(id);
    res.status(200).send({ message: "SUCCESS", data });
  } catch (error) {
    res.status(500).send({ error: "Unable to get user from database" });
  }
};

export const UpdateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  try {
    const data = await StudentModel.findByIdAndUpdate(id, { name, email, phone }, { new: true });
    res.status(200).send({ message: "User updated successfully", data });
  } catch (error) {
    res.status(500).send({ error: "Unable to update user" });
  }
};

export const DeleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    await StudentModel.findByIdAndDelete(id);
    res.status(200).send({ message: "SUCCESS" });
  } catch (error) {
    res.status(500).send({ error: "Unable to delete user" });
  }
};
