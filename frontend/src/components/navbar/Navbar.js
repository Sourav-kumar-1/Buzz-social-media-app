import Logo from '../../assets/logo.png';
import React, { useEffect, useState } from 'react';
import UserPhoto from '../../assets/user-photo.avif'
import { BsMessenger, BsPersonFill } from 'react-icons/bs';
import './navbar.css'
import { useNavigate} from 'react-router-dom'
import { getLocalStorageData } from '../../util';
const Navbar = () => {
    const navigate = useNavigate();
    
    const [userInfo,setUserInfo]=useState({});

    const getUserData = () =>{
       const userData= getLocalStorageData("userinfo");
       setUserInfo(userData);
    }

    const handleClick=() =>{
        navigate(`/user/${userInfo._id}`, { replace: true })
    }
    
    const handleSignOut=() =>{
        window.localStorage.removeItem("userinfo");
        navigate(`/signin`, { replace: true })
    }

    useEffect(() => {
        getUserData();
    },[])

    return (
        <nav className="main-nav">
            <a href="/feed">
            <div className="left-nav" >
                <img src={Logo} alt='' className='nav-logo'></img>
                
            </div>
            </a>
            

            <div className="right-nav">
            
                <div className='username' onClick={handleClick}>
                    <img src={userInfo?.profilePicture} alt='' className='user-image'></img>
                    <div>{userInfo?.firstName + " " + userInfo?.lastName}</div>
                </div>
            
             
                <div className='icons'>
                    <div className='msg-icon'><BsMessenger/></div>
                    <div className='person-icon'><BsPersonFill/></div>
                </div>

                <div className='logout'>
                    <button className ="signout-btn" onClick={handleSignOut}>Sign Out</button></div>
            </div>

        </nav>
    )
}

export default Navbar