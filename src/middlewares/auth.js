// Verifica se o usuário está logado
const authMiddleware = (req, res, next) => {
    const isAuth = req.cookies.user;
    if(isAuth) {
        next();
    } else {
        req.session.destroy();
        res.clearCookie("user");
        res.clearCookie("admin");
        res.redirect("/home-adm");
    }
};

module.exports = authMiddleware;