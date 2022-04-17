import CreatePost from "../createPost/CreatePost";
import { Posts } from "../../dummydata";
import Post from "../post/Post";
import SortByButton from "../sortByButton/SortByButton";
import { useEffect, useState } from "react";
import "./centerFeedBar.css";
import axios from 'axios';

const CenterFeedBar = () => {
  const [posts,setPosts]=useState();
  const [postData, setPostData] = useState([]);

  const addNewPost = (text, media) => {
    setPostData((prevPosts) => {
      return [
        {
          id: 788798,
          text,
          photo: "frontend/src/assets/post/1.jpeg",
          date: new Date(),
          userId: 1,
          like: 0,
          dislike: 0,
          comment: 0,
        },
        ...prevPosts,
      ];
    });
  };
  useEffect(() => {
    setPostData(Posts);
  }, []);

  useEffect(()=>{
    const fetchPosts=async () => {
      const res=await axios.get("posts/timeline/625c0e3bc1924c81e7329ea7");
      console.log(res);
    };
    fetchPosts();
  },[]);

  return (
    <div className='centerFeedBar-container'>
      <CreatePost addNewPost={addNewPost}></CreatePost>
      <SortByButton></SortByButton>
      {postData.map((p) => (
        <Post key={p.id} post={p}></Post>
      ))}
    </div>
  );
};

export default CenterFeedBar;
