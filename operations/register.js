const bcrypt = require("bcryptjs")

exports.register = (req, res, next) => {
  // Implement the middleware function based on the options object
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      res.status(401).json({ field: "email", message: "Email already exists" });
      next('route')
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) next(err);
          newUser.password = hash;
          newUser.save()
          .then(user => {
            req.user = user
            next()
          })
          .catch(next);
        });
      });
    }
  })
}
