import profilePhoto from "../../assets/profile-photo.avif";
import postPhoto from "../../assets/post-photo.avif";
import userImage from "../../assets/user-photo.avif";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FcDislike } from "react-icons/fc";
import { AiOutlineLike } from "react-icons/ai";
import { RiDislikeLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

import "./post.css";

import { Users, commentDummyData } from "../../dummydata";

const Post = ({ post }) => {
  // defining state for like and dislike count
  const [likeCount, setLikeCount] = useState(post.like);
  const [dislikeCount, setDislikeCount] = useState(post.dislike);
  const [commentCount, setCommentCount] = useState(post.comment);

  //defining state to check if like is active or not
  const [likeIsActive, setLikeIsActive] = useState(false);
  const [dislikeIsActive, setDislikeIsActive] = useState(false);

  const [inputComment, setInputComment] = useState("");
  const [commentData, setCommentData] = useState([]);

  const inputCommentRef = useRef(null);
  const user = Users.filter((u) => u.id === post.userId)[0];

  const focusInput = () => {
    inputCommentRef.current.focus();
  };

  const handleInputChange = (e) => {
    setInputComment(e.target.value);
  };

  const handleLikes = () => {
    if (dislikeIsActive) {
      handleDislikes();
    }
    setLikeCount(!likeIsActive ? likeCount + 1 : likeCount - 1);
    setLikeIsActive((prev) => !prev);
  };

  const handleDislikes = () => {
    if (likeIsActive) {
      handleLikes();
    }
    setDislikeCount(!dislikeIsActive ? dislikeCount + 1 : dislikeCount - 1);
    setDislikeIsActive((prev) => !prev);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      setCommentData((prevComment) => {
        return [{ text: inputComment, user: Users[0] }, ...prevComment];
      });
      setCommentCount(commentCount + 1);
      setInputComment("");
    }
  };

  // useEffect(() => {
  //   console.log(commentData);
  // }, [commentData]);

  useEffect(() => {
    setCommentData(commentDummyData);
  }, []);

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="postUserDetails">
          <div className="postUserPhoto">
            <img src={profilePhoto}></img>
          </div>
          <div className="postInfo">
            <h5 className="postUsername">{user.username}</h5>
            <div className="postDate">{post.date}</div>
          </div>
        </div>
        <div className="threeDot">
          <BsThreeDots></BsThreeDots>
        </div>
      </div>
      <div className="post-center">
        <div className="postText">{post.text}</div>
        <div className="postPhoto-Video">
          <img src={post.photo}></img>
        </div>
        <div className="postLike-Dislike-Comment">
          <div className="like-DislikeCount">
            <div className="likes">
              <AiFillLike className="likeIcon"></AiFillLike>
              {likeCount}
            </div>
            <div className="dislikes">
              {" "}
              <FcDislike className="dislikeIcon"></FcDislike>
              {dislikeCount}
            </div>
          </div>
          <div className="commentCount">{commentCount} comment</div>
        </div>
      </div>

      <div className="post-footer">
        <div className="like-DislikeActionBar">
          <button className="like-button" onClick={handleLikes}>
            <AiOutlineLike
              className={`likeAction ${
                likeIsActive ? "activeLikeDislike" : ""
              }`}
            ></AiOutlineLike>
            Like
          </button>
          <button className="dislike-button" onClick={handleDislikes}>
            <RiDislikeLine
              className={`dislikeAction ${
                dislikeIsActive ? "activeLikeDislike" : ""
              }`}
            ></RiDislikeLine>
            Dislike
          </button>
          <button className="comment-button" onClick={focusInput}>
            <FaRegComment className="commentAction"></FaRegComment>Comment
          </button>
        </div>

        <div className="commentBox">
          <div className="userPhoto">
            <img src={userImage}></img>
          </div>
          <input
            ref={inputCommentRef}
            placeholder="Write a comment..."
            onKeyPress={handleKeyPress}
            value={inputComment}
            onChange={handleInputChange}
          ></input>
        </div>
        {commentData.map((c, idx) => (
          <SingleComment
            c={c}
            commentData={commentData}
            key={idx}
          ></SingleComment>
        ))}
      </div>
    </div>
  );
};

export default Post;

const SingleComment = ({ c, commentData }) => {
  const [commentLikeCount, setCommentLikeCount] = useState(10);
  const [isCommentLikeActive, setIsCommentLikeActive] = useState(false);

  const handleLikeComments = () => {
    setIsCommentLikeActive((prev) => !prev);

    !isCommentLikeActive
      ? setCommentLikeCount(commentLikeCount + 1)
      : commentLikeCount > 1
      ? setCommentLikeCount(commentLikeCount - 1)
      : setCommentLikeCount(0);
  };

  return (
    <div className="singleComment-container">
      <div className="commentUser-details">
        <img src={c.user.profilePicture} className="commentUserPhoto"></img>
        <div>{c.user.username}</div>
      </div>
      <div className="commentText">{c.text}</div>
      <div className="commentLike">
        <div className="commentLikeButton" onClick={handleLikeComments}>
          Like
        </div>
        <AiFillLike
          className={isCommentLikeActive ? "setLikeColor" : ""}
        ></AiFillLike>
        {commentLikeCount}
      </div>
    </div>
  );
};
