const mongoose = require("mongoose");


const registerSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

const Register = mongoose.model("register", registerSchema);

module.exports = Register;