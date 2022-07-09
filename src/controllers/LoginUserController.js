const LoginUserController = {
    index: (req, res) => {
        return res.render("loginUser", {title: "Login"});
    },
};

module.exports = LoginUserController;