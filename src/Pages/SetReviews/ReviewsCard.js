import React from 'react';

const ReviewsCard = ({ review }) => {
    const { photo, name, serviceName, comments } = review;
    return (

        <div className="mockup-phone bg-slate-50 p-5">
           <img className='rounded-full mt-2 h-8 mx-auto' src={photo} alt="" />
           <h5 className='text-xl text-cyan-600'>{name}</h5>
             <h5 className='text-xl text-red-900'>{serviceName}</h5>
             <p className='text-sm text-gray-500'>{comments}</p> 
        </div>
         
    );
};

export default ReviewsCard;