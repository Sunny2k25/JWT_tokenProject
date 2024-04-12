const { response } = require("express");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const middleware = require("../Middleware/verifyMiddleware")

const handleUserSignUp = (req, res) => {
  try {
    userModel
      .create(req.body)
      .then(() => {
        res.json({ Message: "Created Sucessfully" }).status(201);
      })
      .catch((err) => {
        res.json({ Message: "This is Wrong", err: err }).status(500);
      });
  } catch (err) {
    res.json({ message: "This is wrong", err: err }).status(500);
  }
};

const handleUserLogin = (req, res) => {
  let { email } = req.body; //destruction of body
  try {
    userModel.find({ email: email }).then((response) => {
      if (response.length >= 1) {
        jwt.sign(req.body, process.env.SECRET_KEY, (err, token) => {
          if (err) {
            res.json({ message: "This is wrong", err: err }).status(500);
          } else {
            res.json({
              Message: "Login Sucessfull",
              data: req.body,
              token: token,
            });
          }
        });
      }
    });
  } catch (err) {
    res.json({ message: "This is error", err: err }).status(500);
  }
};


const getdetails =(req,res)=>{
  console.log(req.email);

}

module.exports = { handleUserSignUp, handleUserLogin, getdetails };
