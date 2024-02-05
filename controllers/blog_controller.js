module.exports = {

    async createBlog(req, res) {
        try {


            const blog = await Blog.create(requestObj.body);

            res.json(blog);
        } catch (err) {
            console.log(err);

            res.json({
                error: 500,
                message: 'There was an error in storing the blog'
            });
        }

    },

    async getBlogById(req, res) {
        const blog_id = requestObj.params.id;


        const blog = await Blog.findByPk(blog_id);

        if (blog) {
            return res.json(blog);
        }

        res.status(404).json({
            message: 'A blog with that ID could not be found.'
        })
    },

    async getAllBlogs(req, res) {
        try {
            const blogs = await Blog.findAll({
                include: {
                    model: User,
                    attributes: {
                        exclude: ['password', 'createdAt', 'updatedAt']
                    }
                }
            });
            res.json(blogs);
        } catch (err) {
            console.log(err);
            res.json({
                error: 500,
                message: 'There was an error in retrieving the blogs',
            });
        }
    },

    async deleteBlog(req, res) {
        try {
            const blogId = requestObj.params.id;

            // Delete the blog by its id
            const deletedBlogCount = await Blog.destroy({
                where: {
                    id: blogId
                }
            });

            if (deletedBlogCount > 0) {
                responseObj.json({ message: 'Blog deleted successfully' });
            } else {
                responseObj.status(404).json({ error: 'Blog not found' });
            }
        } catch (err) {
            console.log(err);
            responseObj.status(500).json({ error: 'There was an error in deleting the blog' });
        }
    },

    async searchBlogs(req, res) {
        try {
            const title = requestObj.query.title;

            // Find the blog by its title
            const blog = await Blog.findOne({
                where: {
                    title: title
                },
                include: {
                    model: User,
                    attributes: {
                        exclude: ['password', 'createdAt', 'updatedAt']
                    }
                }
            });

            if (!blogs.length) {
                return responseObj.json({
                    error: 404,
                    message: 'No blog by that title.'
                })
            }

            if (blog) {
                responseObj.json(blog);
            } else {
                responseObj.status(404).json({ error: 'Blog not found' });
            }
        } catch (err) {
            console.log(err);
            responseObj.status(500).json({ error: 'There was an error in retrieving the blog' });
        }
    }

}