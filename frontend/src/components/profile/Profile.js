import React from 'react';




function Profile() {

  const openLink = () => {
    window.location.href = 'https://www.youtube.com/watch?v=NWG1Ygt1k1k&t=350s&ab_channel=WebStylePress';
  }

  return (
      <div className='profile'>
        <div className='cover-image'>
          <img className='c-img' src={require("../image/img-cover.jpg")} alt="image not found" height={'250px'} width={'100%'} />
        </div>
        <div className='profile-image'>
          <img className='p-img' src={require("../image/profile-image.jpg")} alt="image not found" />
        </div>
        <div className='profile-info'>
          <div className='profile-name'><h2 >SARAH WOOD</h2></div>
          <div className='profile-text'><h5>Sarah Wood is co-founder and COO of video ad tech company </h5></div>
        </div>
        <button type="button" class="btn" ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
        </svg>Add Friend</button>

        <button onClick={openLink} type="button" class="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
          <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
        </svg>Visit Website</button>
      </div>

      
  )
}

export default Profile
