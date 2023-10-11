const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    dateOfBirth:String,
    username:String,
    password:String,
    profileImage:String
})

export default userSchema;