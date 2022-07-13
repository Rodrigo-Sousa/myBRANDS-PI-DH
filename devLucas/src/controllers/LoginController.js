const LoginController = {
    index: (req, res) => {
        return res.render("login", {title: "Login"});
    },
};

module.exports = LoginController;