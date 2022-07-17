import React, { useState } from 'react';
import './About.css';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { goBack } from '../../utilities/goBack';

const About = () => {
  const params = useParams();
  const user = useSelector((state)=>state.home);
  const [state,setState] = useState([]);
  const details = user.users.filter((data)=>Number(params.id) === data.id);
  const handleClick = (path) => {
    axios.get(path).then((response)=>{
      setState(response.data)
    })
  }
  return (
    <div className='m-2'>
    <button className='goBack mb-2' onClick={goBack}>go Back</button>
    <div className='container '>
      {details.map((data,index)=>{
        return(
        <>
          <div key={index} className='left-container'>
            <div className='circle-about'>
              <div className='font-white'>
                icon
              </div>
            </div>
            <div className='content-wrapper'>
              <div className='fnt-14'>Verified by Github</div>
              <div className='font-13 font-color mt-5'>{data.description}</div>
              <div className='font-color category'>Categories</div>
              <div className='mt-10'>
                {data.topics.map((data,index)=>{
                  return(
                    <span className='categories fnt-14 m-4' key={index}>
                      {data}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='right-container'>
            <div className='font-color'>Application</div>
            <div className='content-title'>{data.name}</div>
            <button className='setup-btn'>Set up a plan</button>
            <div className='about-description'>{data.description}</div>
          </div>
          <div className='follower' style={{cursor:'pointer'}} onClick={()=>handleClick(data.owner.followers_url)}>Followers</div>
        </>
      )
    })}
    </div>
    <div className='about-outer-div'>
        {state?.map((data,index)=>{
          return(
            <Link to={`/followers/${data.login}`} key={index} className='about-inner-div'>
              <div className='d-flex'>
                <div className='circle'>
                  <div className='white'>
                    icon
                  </div>
                </div>
                <div>
                  <div className='title'>{data.login}</div>
                  <div className='title'>{data.html_url}</div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default About