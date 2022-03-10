const mongoose = require("mongoose");
const validator = require("validator");

const signupUserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email Id already prsent"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
  },
});

//we will create a new collection
const signupUserSchema = new mongoose.model("Student", studentSchema);

module.exports = signupUserSchema;
