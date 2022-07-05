const UserController = {
    index: (req, res) => {
        return res.render("users", {title: "Users"});
    },
};

module.exports = UserController;