const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
console.log("INSIDE TeacherSchema");
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  branch: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  cpassword: {
    type: String,
    required: true,
    trim: true,
  },
  person: {
    type: String,
    default: "T",
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
teacherSchema.methods.generateAuthToken = async function () {
  console.log("Create TOKEN for Teacher Schema");
  try {
    let token_teach = jwt.sign({ _id: this._id }, process.env.SECRET_KEYS);
    this.tokens = this.tokens.concat({ token: token_teach });
    await this.save();
    console.log("token created");
    // console.log(token);
    return token_teach;
  } catch (err) {
    console.log(err);
    console.log("TOKEN NOT CREATED");
  }
};
const Teacher = mongoose.model("TEACHERCOLLECTION", teacherSchema);
// console.log(Teacher);
module.exports = Teacher;
