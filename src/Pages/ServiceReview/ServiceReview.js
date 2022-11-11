import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const ServiceReview = () => {
    const [serviceReview, setServiceReview] = useState([])
    const {user} = useContext(AuthContext)

   
        fetch(`http://localhost:5001/review`)
        .then(res=> res.json())
        .then(data =>{
            setServiceReview(data)
            console.log(data)})
   
    return (
        <div>
           {
            serviceReview.map(review =><ReviewCard key={review.serviceId} review={review}></ReviewCard>)
           }
        </div>
    );
};

export default ServiceReview;