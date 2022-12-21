import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewsCard from './ReviewsCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const ClientReviews = () => {
   const [reviews, SetReviews] = useState([])
   const {user} = useContext(AuthContext)

   useTitle('My Reviews')

   useEffect(() => {
    fetch(`https://photography-server-phi.vercel.app/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => SetReviews(data))
}, [user?.email])
const handleDeleteReview = id =>{
    const procced = window.confirm('Are You Sure Delete This Review')
    if (procced){
      fetch(`https://photography-server-phi.vercel.app/review/${id}`,{
        method : 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
        if(data.deletedCount > 0){
            toast("Deleted Success",{
                position:'top-center'
            });
            const remaining = reviews.filter(review => review._id !== id)
            SetReviews(remaining)
        }
      })
    }
  }
    return (
        <div className=''>
            <ToastContainer/>
            {
                reviews.map(review =><ReviewsCard handleDeleteReview={handleDeleteReview} key={review._id} review={review}></ReviewsCard>)
            }
        </div>
    );
};

export default ClientReviews;