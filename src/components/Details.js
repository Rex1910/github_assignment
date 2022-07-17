import React from 'react'
import { Link } from 'react-router-dom'

const Details = (props) => {
  const {data} = props;
  return (
    <div className='outer-div mx-2'>
      {data.map((data,index)=>{
        return(
          <Link to={`/about/${data?.id}`} key={index} className='outer-inner-div'>
            <div className='d-flex'>
              <div className='circle'>
                <div className='white'>
                  icon
                </div>
              </div>
              <div className='description font-13 font-color'>
                {data.description ? data.description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Details;