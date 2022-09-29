const HomePageController = {
    index: (req, res) => {
        console.log("Usuário:" + user)
        return res.render("home-page", { title: "Home", user: req.cookies.user });
    },
   
};

module.exports = HomePageController;