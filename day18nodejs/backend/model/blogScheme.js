const mongoose = require("mongoose");

const BlogScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,

    },
    description: {
        type: String,
        required: true,

    },
    draft: {
        type: Boolean,
        default: false,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
},
    {
        timestamps: true,
    }
)

const Blog = mongoose.model("Blog", BlogScheme);
module.exports = Blog;