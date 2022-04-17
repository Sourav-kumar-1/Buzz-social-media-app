import CreatePost from "../createPost/CreatePost";
import { Posts } from "../../dummydata";
import Post from "../post/Post";
import SortByButton from "../sortByButton/SortByButton";
import { useEffect, useState } from "react";
import "./centerFeedBar.css";

const CenterFeedBar = () => {
  // const style = {
  //   width: "calc(100% - 600px)",
  // };

  const [postData, setPostData] = useState([]);

  const addNewPost = (text, media) => {
    setPostData((prevPosts) => {
      return [
        {
          id: 788798,
          text,
          photo: "frontend/src/assets/post/1.jpeg",
          date: new Date().toUTCString(),
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
