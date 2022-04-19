import profileImage from '../../assets/user-photo.avif'
import './aboutUser.css'
import React from 'react';
const AboutUser = () => {
    return (
       
        <div className="profile-container">
            <div className="profile-image">
                <a href='#'><img src={profileImage} alt=''></img></a>
            </div>
            <div className="profileName">
                <h4><a href='#'>Shekhar Agarwal</a></h4>
                <div>Newly Recruit at TTN</div>
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