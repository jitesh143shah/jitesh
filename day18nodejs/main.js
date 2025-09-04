const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();

console.log(process.env.MONGO_URI)

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected  successfully ")

    } catch (error) {
        console.log(error)

    }

}
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    pasword: String,
});

const User = mongoose.model("user", userSchema);
async function createUsers() {
    try {
        let newUser = await User.create({
            name: "CLouds",
            email: "email@gmail.com",
            pasword: "clouds",
        })

    } catch (error) {
        console.log(error.code);
        // 11000 if it shows duplicate data

    }
}


app.listen(5000, () => {
    console.log("server started")
    connectDB();
    createUsers();
});