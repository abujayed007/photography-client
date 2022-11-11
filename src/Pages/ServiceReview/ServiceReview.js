import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const ServiceReview = ({id}) => {
console.log(id);
    const [serviceReview, setServiceReview] = useState([])
    const {user} = useContext(AuthContext)

   
        useEffect(()=>{
            fetch(`http://localhost:5001/review?serviceId=${id}`)
        .then(res=> res.json())
        .then(data =>{
            setServiceReview(data)})
        },[user?.email]);

       
   
    return (
        <div>
           {
            serviceReview.map(review =><ReviewCard  key={review.serviceId} review={review}></ReviewCard>)
           }
        </div>
    );
};

export default ServiceReview;