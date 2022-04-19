const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required:true,
    min: 3,
    max: 20
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 20
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
    validate: {
      validator: function (value) {
        const urlPattern = /.*@tothenew.com.*/i;
        const urlRegExp = new RegExp(urlPattern);
        return value.match(urlRegExp);
      },
      message: props => `${props.value} is not a valid email`
    }
  },
  // /.*@tothenew.com.*/i 
  password: {
    type: String,
    required: true,
    min: 8
  },
  username: {
    type: String,
    min: 3,
    max: 20,
    
  },
  designation: {
    type: String,
    min: 3
  },
  gender: {
    type: String,
    enum:['male', 'female' , 'prefer not to say']
  },
  website: {
    type: String,

  },
  birthdate: {
    type: String,
    max:11
  },
  city: {
    type: String,
    max:20
  },
  state: {
    type: String,
    max:20
  },
  Zipcode: {
    type: Number,
    min:6
  },
  profilePicture: {
    type: String,
    default: "https://res.cloudinary.com/dehtjz7rt/image/upload/v1650135544/samples/default_pafsc4.jpg"
  },
  coverPicture: {
    type: String,
    default: "https://res.cloudinary.com/dehtjz7rt/image/upload/v1650135707/samples/default-cover-image_pjf23r.jpg"
  },
  //friend = follow
  friends: {
    type: Array,
    default: []
  },
  //following = friendrequest
  friendRequest: {
    type: Array,
    default: []
  },
}, { timestamps: true }
)


UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.TOKEN_SECRET, {
    expiresIn: "7d",
  });
  return token;
};
module.exports = mongoose.model("User", UserSchema);