import { BiHash,BiTrendingUp } from 'react-icons/bi'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { BsPeopleFill,BsFillLightbulbFill } from 'react-icons/bs'
import {FcGlobe,FcBullish} from 'react-icons/fc'
import {IoIosArrowDown ,IoIosArrowUp} from 'react-icons/io'
import {FaReact} from 'react-icons/fa';
import './RecentGroupSubs.css'
import React from 'react';
import { useState } from 'react'
const RecentGroupSubs = () => {
    const[showText,setShowText]=useState(false);
    // const[showButton,setShowButton]=useState(true);
    const handleShowMoreGroup = () =>{
        setShowText(!showText);
        // setShowButton(!showButton);
    }
    return (
            <div className='description-container'>
            <div className="recent">
                <h4 className='title'>Recent</h4>
                <ul>
                    <li><BiHash className='icon'/>#javascript</li>
                    <li><AiTwotoneCalendar className='icon' />Mobile Trends Conference </li>
                    <li><BsPeopleFill className='icon'/>Freelance Developers</li>
                   
                </ul>
            </div>
            <div className="group">
                <h4 className='title'>Groups</h4>
                <ul>
                    <li><BiHash className='icon' />#javascript</li>
                    <li><AiTwotoneCalendar className='icon' />Mobile Trends Conference</li>
                    <li><BsPeopleFill className='icon' />Freelance Developers</li>
                    <li className={showText ? 'textIsVisible-group' : 'textNotVisible-group'}><FaReact className='icon'></FaReact>Working with ReactJS</li>
                    <li className={showText ? 'textIsVisible-group' : 'textNotVisible-group'}><BiTrendingUp className='icon'></BiTrendingUp>AI-ML Trends 2022</li>
                    <li><button className='showMoreButton' onClick={handleShowMoreGroup}>{ showText ? <IoIosArrowUp className='icon arrowup'></IoIosArrowUp> : <IoIosArrowDown className='icon arrowdown'></IoIosArrowDown>}{ showText ? 'Show Less' : 'Show More'}</button></li>
                </ul>
            </div>
            <div className="subs">
            <h4 className='title'>Subscriptions</h4>
            <ul>
                <li><BsFillLightbulbFill className='icon'/>Programming with Mosh</li>
                <li><FcGlobe  className='icon'/>E-learning Bridge</li>
                <li><FcBullish className='icon'/>Clever Programmer</li>
            </ul>
            </div>
            </div>
    )
}

export default RecentGroupSubs