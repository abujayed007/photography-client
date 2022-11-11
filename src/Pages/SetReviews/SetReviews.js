import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SetReviews = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData([])
    const { name, img, _id, details, ratings, price, level } = service
    console.log(service);

    const handleReview = e =>{
        e.preventDefault()
        const form = e.target;
        const userName = form.name.value
        const phone = form.phone.value
        const comments = form.comments.value
        const email = user?.email || "Unauthrized"
        console.log(userName, phone);

        const reviews = {
            serviceId: _id,
            name: userName,
            photo:user?.photoURL,
            email:email,
            serviceName:name,
            customer: name,
            phone,
            comments
        }
        console.log(reviews);

        fetch(`http://localhost:5001/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
                if(data.acknowledged){
                    alert('Review Submited')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>
        <form onSubmit={handleReview} className='w-3/4 mx-auto grid grid-cols-1  md lg:grid-cols-2 gap-y-6 gap-x-6'>
           <input name="name" type="text" placeholder="Your Name" className="input w-full " />
            <input name="phone" type="text" placeholder="Your Phone"  className="input w-full" />
            <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email}  readOnly
             className="input w-full h-24" />
            <input name="comments" type="text" placeholder="Your Comments" className="input w-full h-24" />
           <input className='btn' type="submit" value="Submit" />
        </form>
           </div>
    );
};

export default SetReviews;