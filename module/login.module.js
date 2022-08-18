const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        email:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register",
        required:true,
    },
    password:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register",
        required:true,
    }
},
  {
    versionKey: false,
    timestamps: true, 
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;