import React,{useEffect,useState} from 'react';
import { getLocalStorageData } from '../../../util';
/* import {BsCameraFill}  from 'react-icons/bs' */
import Navbar from '../../navbar/Navbar'
import Suggestion from '../../suggestion/Suggestion'
import './user.css'
///import {Button,Form,Col,Ro} from 'react-bootstrap';
function User() {

  const [userInfo, setUserInfo] = useState({});

  const getUserData = () => {
    const userData = getLocalStorageData("userinfo");
    setUserInfo(userData);
  }
  const handleProfile = () => {
    console.log('profile clicked')
  }

  const handleCover = () => {
    console.log('cover clicked')
  }

  useEffect(() => {
    getUserData();
  }, [])


  return (
    <>
      <div className='nav'>
        <Navbar />
      </div>
      <div className='outerclass'>

        <div className='user-container'>
          <div>
            <img src='/assets/cover1.jpg' alt='profile-pic' className='cover-img' onClick={handleCover}></img>
            <img src={userInfo?.profilePicture} alt='profile-pic' className='profile-img' onClick={handleProfile}></img>
            <h4 className='profile-name'>{userInfo?.firstName + " " + userInfo?.lastName}</h4>
          </div>
          <div className='form'>
            <div className='left-content'>
              <label>First name</label><br />
              <input type='text' placeholder='firstName' />
              <br />
              <label>Designation</label><br />
              <select >
                <option disabled selected hidden muted></option>
                <option  >Senior software engineer</option>
                <option >software engineer</option>
                <option >trainee</option>
              </select>
              <br />
              <label>Gender</label><br />
              <select >
                <option disabled selected hidden muted></option>
                <option  >Male</option>
                <option >Female</option>
              </select><br />
              <label>city</label><br />
              <input type='text' placeholder='city' />
              <div>
                <button className='sve-btn'>save</button>
                <button className='reset-btn'>resetAll</button>
              </div>
            </div>


            <div className='right-content'>
              <label>Last Name</label><br />
              <input type='text' placeholder='lastName' />
              <br />
              <label>My Website</label><br />
              <input type='text' placeholder='website.com' />

              <br />
              <label>Birthdate</label><br />
              <input type='date' placeholder='DD/MM/YYYY' />
              <br />

              <div className='address-content'>
                <label>state<br />
                  <input type='text' placeholder='state' />
                </label>
                <label>zipcode<br />
                  <input type='number' placeholder='zipcode' maxlength='6' />
                </label><br />
              </div>

            </div>
          </div>


        </div>
        <div className='suggests'>
          <Suggestion title={'Suggestions'} />
        </div>
      </div>
    </>
  )
}




export default User
