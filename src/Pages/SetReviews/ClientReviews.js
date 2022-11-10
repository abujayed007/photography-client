import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewsCard from './ReviewsCard';

const ClientReviews = () => {
   const [reviews, SetReviews] = useState([])
   const {user} = useContext(AuthContext)

   useEffect(() => {
    fetch(`http://localhost:5001/review`)
        .then(res => res.json())
        .then(data => SetReviews(data))
}, [])

    return (
        <div className=''>
            {
                reviews.map(review =><ReviewsCard key={review._id} review={review}></ReviewsCard>)
            }
        </div>
    );
};

export default ClientReviews;