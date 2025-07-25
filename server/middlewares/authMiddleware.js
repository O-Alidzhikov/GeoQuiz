const jwt = require("../lib/jwt");
const { SECRET } = require("../constants/constants");

exports.auth = async (req, res, next) => {
  const token = req.cookies["auth-token"];

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, SECRET);
      req.user = decodedToken;
      res.locals.user = decodedToken;
      res.locals.isAuthenticated = true;

      next();
    } catch (error) {
      console.log({ error });
      res.clearCookie("auth-token");
      // res.redirect("/users/login");
    }
  } else {
    next();
  }
};

exports.isAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};
