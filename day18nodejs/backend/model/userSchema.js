const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        required: true,
    }]
}, {
    timestamps: true,
},
);
const User = mongoose.model("user", userSchema);
module.exports = User;