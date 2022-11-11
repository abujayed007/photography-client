import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ReviewsCard = ({ review, handleDeleteReview }) => {
  const { photo, name, serviceName, comments, email, _id } = review;
  const {user} = useContext(AuthContext)

  

  return (
    <div className="mockup-phone px-5 bg-slate-50 w-96 h-72 p-5">
      <div className="flex justify-between">
        <label>
        <button onClick={()=> handleDeleteReview(_id)} className='btn'>X</button>
        </label>
        <label>
        <Link to='/update'><button className='btn'>Update</button></Link>
        </label>
      </div>
      <img className='rounded-full mt-2 h-8 mx-auto' src={photo} alt="" />
      <h5 className='text-xl text-red-900'>{serviceName}</h5>
      <h5 className=' text-cyan-600'>{name}</h5>
      <h6 className=' text-cyan-600'>{email}</h6>
      <p className='text-sm text-gray-500'>{comments}</p>
    </div>

  );
};

export default ReviewsCard;