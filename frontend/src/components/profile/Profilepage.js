import React from 'react'
import Profile from './Profile'
import Suggestion from '../suggestion/Suggestion'
import './profile.css'
import '../suggestion/suggestion.css';


function Profilepage() {
  return (
    <div className='profilepage'>
      

      <Profile />

      <Suggestion />


    </div>
  )
}

export default Profilepage
