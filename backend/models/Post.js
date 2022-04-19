const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userId:{type:String,required:true},
  postText:{type:String,max:1000},
  postimg:{type:String,},
  likes:{type:Array,default:[]},
  dislikes:{type:Array,default:[]},
  comment:{type:Array,default:[]},
}, { timestamps: true }
)

module.exports = mongoose.model("Post", PostSchema);