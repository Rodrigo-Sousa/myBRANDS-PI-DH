const HomePageController = {
    index: (req, res) => {
        return res.render("homePage", {title: "Home"});
    },
};

module.exports = HomePageController;