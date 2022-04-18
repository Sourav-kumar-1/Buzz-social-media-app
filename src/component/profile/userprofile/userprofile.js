import React from 'react'
import { IoMdPersonAdd } from 'react-icons/io'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import './userprofile.css'
function Userprofile() {
  return (
    <div className='profile-container'>
      <div className='cover-profile-img'>
        <img className='cvr-img' src='/assets/cover1.jpg' />
        <img className='prf-img' src='/assets/photos-3.jpg' />
      </div>
      <div className='profile-info'>

        <h1>Sarah Wood</h1>
        <span >
          London . England . United Kingdom 234 friends
        </span>
      </div>
      <div className='usr-btn'>
        <button className='acpt-btn'><IoMdPersonAdd className='add-icon' />Add</button>
        <button className='cnl-btn'><BsBoxArrowUpRight />Website</button>
      </div>
    </div>
  )
}

export default Userprofile