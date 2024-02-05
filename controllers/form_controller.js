module.exports = {
    async createUser(req, res) {
        try {
            await User.create(request.body);


        } catch (err) {
            console.log(err)
            res.redirect('/create/user');
        }
    },

    async createRecipe(req, res) {
        try {
            await Recipe.create(req.body);

            res.redirect('/?blog_added=true');
        } catch (error) {
            console.log(err);
            res.redirect('/create/blog');
        }
    }

}