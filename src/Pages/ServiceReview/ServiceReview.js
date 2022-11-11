import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewCard from './ReviewCard';

const ServiceReview = ({id}) => {
    useTitle('My Reviews Reviews')
console.log(id);
    const [serviceReview, setServiceReview] = useState([])
    const {user} = useContext(AuthContext)

   
        useEffect(()=>{
            fetch(`https://photography-server-phi.vercel.app/review?serviceId=${id}`)
        .then(res=> res.json())
        .then(data =>{
            setServiceReview(data)})
        },[id]);

       
   
    return (
        <div>
           {
            serviceReview.map(review =><ReviewCard  key={review.serviceId} review={review}></ReviewCard>)
           }
        </div>
    );
};

export default ServiceReview;