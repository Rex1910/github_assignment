import React, { useState } from 'react';
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../slice/homeSlice';
import Details from '../Details';
import { goBack } from '../../utilities/goBack';

const Home = () => {
  const user =useSelector((state)=>state.home);
  const dispatch = useDispatch();

  const [value,setValue] = useState('');
  const onSubmit = () =>{
    dispatch(fetchUsers(value))
  }
  return (
    <div>
      <div className='main-div'>
        <button className='mb-2 goBack' onClick={goBack}>go Back</button>   
        <div className='input-div'>
          <input className='inpt' type="text" placeholder='repo' value={value} onChange={(e)=>setValue(e.target.value)} />
          <button className='submit-btn' onClick={onSubmit}>Search</button>
      </div>
      </div>
      {user.loading && <div className='loader'>Please Wait...</div>}
      {user.error && <div className='loader'>User Not Found </div>}
      <Details data={user.users} />
    </div>
  )
}

export default Home