import profilePhoto from "../../assets/profile-photo.avif";
import postPhoto from "../../assets/post-photo.avif";
import userImage from "../../assets/user-photo.avif";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FcDislike } from "react-icons/fc";
import { AiOutlineLike } from "react-icons/ai";
import { RiDislikeLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import React from "react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

import "./post.css";

import { Users, commentDummyData } from "../../dummydata";

const Post = ({ post, deletePost, userInfo }) => {
  // defining state for like and dislike count
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  //defining state to check if like is active or not
  const [likeIsActive, setLikeIsActive] = useState(false);
  const [dislikeIsActive, setDislikeIsActive] = useState(false);

  const [inputComment, setInputComment] = useState("");
  const [commentData, setCommentData] = useState([]);

  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [user, setUser] = useState({});

  const handleDotClick = () => {
    setOpenDeletePopup((open) => !open);
  };

  const inputCommentRef = useRef(null);
  // const user = Users.filter((u) => u.id === post.userId)[0];

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

  const fetchUser = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/user/${id}`);
      console.log(res);
      setUser(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (post?.userId) {
      fetchUser(post?.userId);
      setLikeCount(post?.likes?.length);
      setCommentCount(post?.comment?.length);
      setDislikeCount(post?.dislikes?.length);
      setLikeIsActive(post?.likes?.includes(userInfo._id));
      setDislikeIsActive(post?.dislikes?.includes(userInfo._id));
    }
  }, [post]);

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="postUserDetails">
          <div className="postUserPhoto">
            <img src={user?.profilePicture}></img>
          </div>
          <div className="postInfo">
            <h5 className="postUsername">
              {user?.firstName + " " + user?.lastName}
            </h5>
            <div className="postDate">{post.createdAt}</div>
          </div>
        </div>

        {userInfo._id === post.userId ? (
          <div className="threeDot">
            {openDeletePopup ? (
              <div className="popupContainer" onClick={deletePost}>
                Remove
              </div>
            ) : (
              <></>
            )}
            <BsThreeDots onClick={handleDotClick}></BsThreeDots>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="post-center">
        <div className="postText">{post.postText}</div>
        <div className="postPhoto-Video">
          {Boolean(post.photo) ? (
            <>
              <img
                src={
                  typeof post.photo !== "string"
                    ? URL.createObjectURL(post.photo)
                    : post.photo
                }
              ></img>
            </>
          ) : (
            <></>
          )}
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
            <img src={userInfo?.profilePicture}></img>
          </div>
          <input
            className="commentBox-input"
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

  const[user,setUser]=useState({});

  const handleLikeComments = () => {
    setIsCommentLikeActive((prev) => !prev);

    !isCommentLikeActive
      ? setCommentLikeCount(commentLikeCount + 1)
      : commentLikeCount > 1
      ? setCommentLikeCount(commentLikeCount - 1)
      : setCommentLikeCount(0);
  };

  // const fetchUser = async (id) => {
  //   try {
  //     const res = await axios.get(`http://localhost:5000/api/user/${id}`);
  //     console.log(res);
  //     setUser(res.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser(post?.userId);
  // })

  return (
    <div className="singleComment-container">
      <div className="commentUser-details">
        <img src={c.user.profilePicture} className="commentUserPhoto"></img>
        <h4>{c.user.username}</h4>
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
