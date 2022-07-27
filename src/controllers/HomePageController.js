const HomePageController = {
    index: (req, res) => {
        return res.render("home-page", {title: "Home"});
    },
};

module.exports = HomePageController;