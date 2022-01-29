const bcrypt = require("bcryptjs");
const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
// const jwt = require('jsonwebtoken');
// const authenticate = require("../Middleware/authenticate");

require("../database/connect");
const User = require("../model/userSchema");

// Register Page
router.post("/register", (req, res) => {
  const { name, email, password, conpassword } = req.body;

  if (!name || !email || !password || !conpassword) {
    return res.status(422).json({ error: "Pls fill details carefully!" });
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "User alredy exist. Pls Login" });
      } else if (password != conpassword || password.length < 6) {
        return res.status(422).json({ error: "Password not matching" });
      }

      const user = new User({ name, email, password, conpassword });

      user.save()
        .then(() => {
          res.status(201).json({ message: "Done successfully!" });
        })
        .catch((err) => res.status(500).json({ message: "Failed!" }));
    })
    .catch((err) => {
      console.log(err);
    });
});

// Login page
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Pls fill details carefully!" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {

      const isSame = await bcrypt.compare(password, userLogin.password);

      if (!isSame || !userLogin) {
        res.status(400).json({ error: "Invalid Credentials!" });
      } else {
        res.status(201).json({ message: "Login successfully!" });
      }

    } else {
      res.status(400).json({ error: "Invalid Credentials!" });
    }

  } catch (err) {
    console.log(err);
  }
});


// Main Page 
// router.get("/Main", authenticate, (req,res) => {
//   console.log("Main Page");
//   res.send("/Main");
// })

module.exports = router;
