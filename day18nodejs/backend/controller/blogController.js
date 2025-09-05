const Blog = require("../model/blogScheme")
async function createBlog(req, res) {
    try {
        const { title, description, draft, creator } = req.body;
        console.log(title, description, draft, creator);
        return res.status(201).json({ success: true, message: "Blog created successfully" });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error", error: error.message });

    }
}
async function getBlog(req, res) { }

module.exports = { createBlog, getBlog };
