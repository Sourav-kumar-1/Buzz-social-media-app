const router = require('express').Router()
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const { JWT } = require('google-auth-library');
const User = require('../models/UserModel');
const refreshToken = require('../utils/token');

router.post("/signup", async (req, res) => {
  try {
    //generate new password
    const userExist = await User.findOne({ email: req.body.email })
    if(userExist){
      res.status(200).json('user already exist');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User(
      { ...req.body, password: hashedPassword });
    console.log(newUser)
    //save user and respond
    const user = await newUser.save();
    console.log(user)
    res.status(200).json(user);
  } catch (err) {
    console.log(err)
     res.status(500).json(err)
  }
});
/* Login User */
 
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("user not found");
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if (!validPassword) {
      return res.status(400).json("wrong password")
    }

    res.status(200).json(user)
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
});





/* Gooooooooooooooooooooooooooooooooooooogle login */


/* router.post("/google/login", async (req, res) => {

  try {
    //encryptionpassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    //CREATE NEW USER
    const newUser = await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword
    })
    //saving user
    const user = await newUser.save();
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }

});
 */
/* router.get('/signup', async  (req,res)=>{
  const user = await  new User({
    username: "john",
    email: "john@tothenew.com",
    password: "1234567890",

  })
 await user.save()
  res.send("user routes auth");
})
 */
module.exports = router;