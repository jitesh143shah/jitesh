const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();

// console.log(process.env.MONGO_URI)

// cors error . it is used to linked between fronend and backend
const cors = require("cors");
const connectDB = require("./config/dbConnect");
app.use(cors());





// async function createUsers() {try {
//         let newUser = await User.create({
//             name: "CLouds",
//             email: "email@gmail.com",
//             pasword: "clouds",
//         })

//     } catch (error) {
//         console.log(error.code);
//         // 11000 if it shows duplicate data
// }}
app.use(express.json());
// app.get("/", async (req, res) => {})
// app.post("/", async (req, res) => {});
// app.get("/:id", async (req, res) => {})
// app.delete("/:id", async (req, res) => {})
// app.patch("/:id", async (req, res) => {})

app.listen(5000, () => {
    console.log("server started")
    connectDB();
    // createUsers();
});