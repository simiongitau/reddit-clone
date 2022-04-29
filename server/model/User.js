const mongoose = require("mongoose")
// creating user schema
const UserSchema = new mongoose.Schema({

    // creating object
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        default: "",
    }
},
    // updated at created at will be included
    { timestamps: true }
)

// finaly support to export the schema
module.exports = mongoose.model("User", UserSchema);