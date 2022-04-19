import React from 'react'
import { IoMdPersonAdd } from 'react-icons/io'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import './userprofile.css'
import { useParams } from 'react-router-dom'
import Suggestion from '../../suggestion/Suggestion'
import Navbar from '../../navbar/Navbar'
function Userprofile() {

  // const {id} =useParams();
  // console.log(id);

  return (
    <>
      <div className='navs'>
        <Navbar />
      </div>
      <div className='outer'>
        <div className='user-profile-container'>
          <div className='cover-profile-img'>
            <img className='cvr-img' src='/assets/cover1.jpg' />
            <img className='prf-img' src='/assets/photos-3.jpg' />
          </div>
          <div className='user-profile-info'>

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
        <div className='suggest'>
          <Suggestion title={'Suggestions'} />
        </div>
      </div>
    </>
  )
}

export default Userprofile
