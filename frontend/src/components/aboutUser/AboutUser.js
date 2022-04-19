import profileImage from '../../assets/user-photo.avif'
import './aboutUser.css'
import React, { useEffect, useState } from 'react';
import { getLocalStorageData } from '../../util';
const AboutUser = () => {

    const[userInfo,setUserInfo]=useState({});

    const getUserData=() =>{
        const userData=getLocalStorageData("userinfo");
        // console.log(userData);
        setUserInfo(userData);
    }

    useEffect(()=>{
        getUserData();
    },[])

    return (
       
        <div className="profile-container">
            <div className="profile-image">
                <a href='#'><img src={userInfo?.profilePicture} alt=''></img></a>
            </div>
            <div className="profileName">
                <h4><a href='#'>{userInfo?.firstName + " " + userInfo?.lastName}</a></h4>
                <div>Working at TTN</div>
            </div>
            <div className="profile-info">
                <div className='profileViews'>
                    <h5>234</h5>
                    <div>Profile Views</div>
                </div>
                <div className='post'>
                <h5>10</h5>
                <div>Post</div>
                </div>
            </div>
        </div>
        
    )
}

export default AboutUser;