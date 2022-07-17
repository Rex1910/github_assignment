import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Details from '../Details';
import { fetchUsers } from '../../slice/homeSlice';
import { goBack } from '../../utilities/goBack';

const Followers = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const user =useSelector((state)=>state.home);
  useEffect(()=>{
    dispatch(fetchUsers(params.id))
  },[])
  return (
    <div >
      <button className='goBack mb-2 m-2' onClick={goBack}>go Back</button>
      <Details data={user.users} />
    </div>
    
  )
}

export default Followers