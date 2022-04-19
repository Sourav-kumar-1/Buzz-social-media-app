import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import LeftSideBar from "../components/leftSideBar/LeftSideBar";
import RightSideBar from "../components/rightSideBar/RightSidebar";
import CenterFeedBar from "../components/centerFeedBar/CenterFeedBar";
import "./feed.css";

import { getLocalStorageData } from "../util";
import { useNavigate} from 'react-router-dom'
const Feed = () => {
  const navigate = useNavigate();
  
  const user = getLocalStorageData("userinfo");
  useEffect(() => {
    if (!Boolean(user)) {
      navigate("/signin");
    }
  }, [user]);
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <div className="feed-container">
        <div className="social-app">
          <LeftSideBar></LeftSideBar>
          <CenterFeedBar></CenterFeedBar>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Feed;
