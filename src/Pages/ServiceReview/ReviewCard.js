import React from 'react';

const ReviewCard = ({review}) => {
    const { photo, name, serviceName, comments , email} = review;
    return (

        <div className="mockup-phone bg-slate-50 w-96 h-72 p-5">
           <img className='rounded-full mt-2 h-8 mx-auto' src={photo} alt="" />
             <h5 className='text-xl text-red-900'>{serviceName}</h5>
           <h5 className=' text-cyan-600'>{name}</h5>
           <h6 className=' text-cyan-600'>{email}</h6>
             <p className='text-sm text-gray-500'>{comments}</p> 
        </div>
         
    );
};

export default ReviewCard;