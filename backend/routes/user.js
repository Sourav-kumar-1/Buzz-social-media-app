
const UserModel = require('../models/UserModel');

const router = require('express').Router()

//get a user
router.get('/:id', async (req,res)=>{
  try{
    const user = await UserModel.findById(req.params.id)
    const {password , updatedAt, ...other}= user._doc
      res.status(200).json(other)
  }catch(error){
    res.status(500).json(error)
  }
})

router.get('/', async(req,res)=>{
  try {
    const allUsers = await UserModel.find({}, { _id: 1, firstName: 1, lastName:1 })
    console.log(allUsers)
    res.status(200).json(allUsers)
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
})
//update user
  router.put('/:id',async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
          try {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt);
          } catch (error) {
            return res.status(403).json(error);
          }
        }
        try{
          const user = await UserModel.findByIdAndUpdate(req.params.id,{
            $set:req.body,
          });
          res.status(200).json('Account details updated')
        }catch(error){
          return res.status(500).json(error);
        }
    }else{
      return res.status(403).json('user not found')
    }
  })
//delete user

router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
   
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Account has been deleted')
    } catch (error) {
      return res.status(403).json(error);
    }
  } else {
    return res.status(403).json('enter correct credential to delete account')
  }
})


//friendlist
//add friend
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await UserModel.findById(req.params.id);
      const currentUser = await UserModel.findById(req.body.userId);
      if (!user.friends.includes(req.body.userId)) {
        await user.updateOne({ $push: { friends: req.body.userId } });
        await currentUser.updateOne({ $push: { friendRequest: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you allready follow this user");
      }
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
});

//unfollow a user

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await UserModel.findById(req.params.id);
      const currentUser = await UserModel.findById(req.body.userId);
      if (user.friends.includes(req.body.userId)) {
        await user.updateOne({ $pull: { friends: req.body.userId } });
        await currentUser.updateOne({ $pull: { friendRequest: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you dont follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant unfollow yourself");
  }
});







/*for test router.get('/api/user',(req,res)=>{
  res.send('from user routes ')
}) */
module.exports = router;
