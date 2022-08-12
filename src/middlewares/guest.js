// Verifica se o usuário está logado
const guestMiddleware = (req, res, next) => {
  const isGuest = req.cookies.user;
  if(!isGuest) {
      next();
  } else {
      res.redirect("/home-adm");
  }
};

module.exports = guestMiddleware;