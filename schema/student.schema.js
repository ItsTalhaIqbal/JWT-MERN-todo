import  { Schema ,model } from "mongoose";

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
},{timestamps:true});

export const StudentModel = model("Student", StudentSchema);
