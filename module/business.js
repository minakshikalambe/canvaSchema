const mongoose = require("mongoose");


const businessSchema = new mongoose.Schema(
  {
    
        email:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register",
        required:true,
        },
        firstname:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"register",
            required:true,
            },
        lastname:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"register",
            required:true,
            },
        address: { type: String, required: true },    
        education: { type: String, required: true },  
        expertice: { type: String, required: true },  
        laguage: { type: String, required: true }, 
        experience: { type: String, required: true }, 
        referance: { type: String, required: true },    
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

const Business = mongoose.model("business", businessSchema);

module.exports = Business;