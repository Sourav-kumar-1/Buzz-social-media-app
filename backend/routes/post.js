const router = require('express').Router()
const Post = require('../models/Post')
const UserModel = require('../models/UserModel')

/* create post */

router.post('/', async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savePost = await newPost.save()
    res.status(200).json(savePost)
  } catch (error) {
    res.status(500).json(error)
  }
})

/* update post */
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

/* delete post */
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.deleteOne()
      res.status(200).json('post deleted')
    } else {
      res.status(403).json(`can't update post`)
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

/* like post */
 router.put('/:id/like', async(req,res)=>{
  try {
    const post = await Post.findById(req.params.id)
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json('you like the post')
    }else{
      await post.updateOne({$pull:{likes:req.body.userId}})
      res.status(200).json('dislike the post')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 })


 /* dislike */
router.put('/:id/dislike', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { dislikes: req.body.userId } });
      res.status(200).json('you dislike the post')
    } else {
      await post.updateOne({ $pull: { dislikes: req.body.userId } })
      res.status(200).json('disliked removed')
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

/* Comment post */
router.put('/:id/comment', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    console.log(post);
    if (!post.comment.includes(req.bofy.userId)) {
      await post.updateOne({ $push: { comment: req.body.userId } });
      res.status(200).json('comment the post')
    } else {
      await post.updateOne({ $pull: { comment: req.body.userId } })
      res.status(200).json('delete the comment')
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

/* get a post */
router.get('/:id',async(req,res)=>{
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
})

/* get all post */
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.userId);
    console.log(currentUser);
    const userPosts = await Post.find({ userId: currentUser._id });
    console.log(userPosts);
    const friendPosts = await Promise.all(
      currentUser.friendRequest.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    console.log(friendPosts);
    res.status(200).json({"allPosts":[...userPosts,...friendPosts]});
    console.log(userPosts)
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

/* router.get("/timeline/:id", async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.id);
    //console.log(currentUser);

    //console.log(currentUser.following);
    const userIds = [currentUser._id, ...currentUser.friendRequest];
    //  console.log(userIds);
    const post = await Post.find({ userId: { "$in": userIds } }).lean();
    //console.log("this is post",post);
    res.status(200).send(post);
    console.log(post)
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}); */

module.exports = router;