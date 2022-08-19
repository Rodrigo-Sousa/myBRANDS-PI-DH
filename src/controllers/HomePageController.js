const HomePageController = {
    index: (req, res) => {
        return res.render("home-page", {title: "Home", user: req.cookies.user, admin: req.cookies.admin});
    },
};

module.exports = HomePageController;