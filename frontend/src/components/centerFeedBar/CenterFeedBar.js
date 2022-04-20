import CreatePost from "../createPost/CreatePost";
import React from "react";
import { Posts } from "../../dummydata";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import "./centerFeedBar.css";
import axios from "axios";
import { getLocalStorageData } from "../../util";
import { v4 as uuidv4 } from "uuid";

const CenterFeedBar = () => {
  const [postData, setPostData] = useState([]);

  const [userInfo, setUserInfo] = useState({});

  const newCreatePost = async (payload) => {
    try {
      const res = await axios.post("http://localhost:5000/api/post", payload);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const addNewPost = async (text, media) => {
    let payload = {
      id: uuidv4(),
      userId: userInfo._id,
      postText: text,
      postimg: media,
      createdAt: new Date().toUTCString,
      like: [],
      dislike: [],
      comment: [],
    };
    payload = await newCreatePost(payload);
    

    payload = {
      ...payload,
      photo: media,
    };
    setPostData((prevPosts) => {
      return [payload, ...prevPosts];
    });
  };

  const deletePostApi= async (id,payload) =>{
    try {
      
      const res= await axios.delete(`http://localhost:5000/api/post/${id}/${payload.userId}`)
      
    } catch (err) {
      console.error(err); 
    }
  }


  const deletePost = async (index) => {
   await deletePostApi(postData[index]._id,{userId : userInfo._id})
    setPostData((prev) => prev.filter((data, idx) => index !== idx));
  };

  // useEffect(() => {
  //   setPostData(Posts);
  // }, []);

  const fetchPosts = async () => {
    try {
      const userData = getLocalStorageData("userinfo");
      const res = await axios.get(
        `http://localhost:5000/api/post/timeline/${
          userData._id ? userData._id : "625c0e3bc1924c81e7329ea7"
        }`
      );
   
      setPostData(res.data.allPosts);
      setUserInfo(userData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="centerFeedBar-container">
      <CreatePost userInfo={userInfo} addNewPost={addNewPost}></CreatePost>
      {postData.map((post, idx) => {
        return (
          <Post
            userInfo={userInfo}
            post={post}
            key={post._id}
            deletePost={() => deletePost(idx)}
          ></Post>
        );
      })}
    </div>
  );
};

export default CenterFeedBar;
