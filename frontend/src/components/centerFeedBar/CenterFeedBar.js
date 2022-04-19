import CreatePost from "../createPost/CreatePost";
import React from 'react';
import { Posts } from "../../dummydata";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import "./centerFeedBar.css";
import axios from "axios";

const CenterFeedBar = () => {
  const [postData, setPostData] = useState([]);

  const newCreatePost = (payload) => {
    const res = axios.post("http://localhost:5000/api/post/api/", payload);
    return res.data;
  };

  const addNewPost = (text, media) => {
    let payload = {
      id: 788798,
      text,
      photo: media,
      date: new Date().toUTCString,
      userId: 1,
      like: 0,
      dislike: 0,
      comment: 0,
    };
    newCreatePost(payload);
    setPostData((prevPosts) => {
      return [payload, ...prevPosts];
    });
  };

  const deletePost = (index) => {
    setPostData((prev) => prev.filter((data, idx) => index != idx));
  };

  useEffect(() => {
    setPostData(Posts);
  }, []); 

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://localhost:5000/posts/timeline/6258817cd417efc2255a7b5f",
  //       );
  //       console.log(res)
  //     } 
  //     catch (error) {
  //       console.log(error)
  //     }      
  //   };
  //   fetchPosts();
  // }, []);

  return (
    <div className="centerFeedBar-container">
       <CreatePost addNewPost={addNewPost}></CreatePost>
      {postData.map((post, idx) => {
        return (
          <Post post={post} key={idx} deletePost={() => deletePost(idx)}></Post>
        );
      })}
    </div>
  );
};

export default CenterFeedBar;
