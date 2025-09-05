const Blog = require("../model/blogScheme");
const User = require("../model/userSchema");
async function createBlog(req, res) {
    try {
        const { title, description, draft, creator } = req.body;
        // console.log(title, description, draft, creator);
        const findUser = await User.findById(creator);
        console.log(findUser);
        if (!findUser) {
            return res.status(404)
                .json({ success: false, message: "Users not  found" });

        }
        if (!title || !description) {
            return res.status(404)
                .json({ success: false, message: "Please fill all fields" });

        }
        const blog = await Blog.create({ title, description, draft, creator });
        await User.findByIdAndUpdate(creator, { $push: { blogs: blog._id } });
        return res.status(201).json({ success: true, message: "Blog created successfully", blog });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error", error: error.message });

    }
}
async function getBlog(req, res) { }

module.exports = { createBlog, getBlog };
