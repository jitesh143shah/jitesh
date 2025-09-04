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

app.listen(5000, () => {
    console.log("server started")
    connectDB();
});