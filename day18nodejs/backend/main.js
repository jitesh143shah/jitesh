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
// async function createUsers() {
//     try {
//         let newUser = await User.create({
//             name: "CLouds",
//             email: "email@gmail.com",
//             pasword: "clouds",
//         })

//     } catch (error) {
//         console.log(error.code);
//         // 11000 if it shows duplicate data

//     }
// }

app.get("/", async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            users,
            // users:users,
        });


    } catch (error) {
        return res.status(200).json({
            success: false,
            message: "Server error",
            error: error.message,
        })

    }
})
app.use(express.json());
app.post("/", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !password || !email) {
            return res.status(400).json({
                success: true,
                message: "Please fill all fields",
            });

        }
        const checkForExitInUser = await User.findOne({ email });
        if (checkForExitInUser) {
            return res.status(400).json({
                success: true,
                message: "User already registered",
            });
        }
        const newUser = await User.create({
            name, email, password
        })

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user: newUser,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,

        })

    }
});

app.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            })

        }
        return res.status(200).json({
            success: true,
            message: "User fetched Successfully",
            user,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Please try again",
        })

    }

})

app.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        if (!deleteUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            })

        }
        return res.status(200).json({
            success: true,
            message: "User deleted Successfully",

        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Please try again",
        })

    }
}
)
app.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const updateUser = await User.findByIdAndUpdate(
            id,
            { name, password, email },
            { new: true });
        if (!updateUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            })

        }

        return res.status(200).json({
            success: true,
            message: "User Updated Successfully",
            user: updateUser,

        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Please try again",
        })

    }
}
)

app.listen(5000, () => {
    console.log("server started")
    connectDB();
    // createUsers();
});