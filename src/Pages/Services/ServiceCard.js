import React from 'react';
import './ServiceCard.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { name, img, _id, details, ratings, price, level } = service;
    return (
       <div className="">
         <div className="card lg:w-1/2 md:w-full  mx-auto glass my-12 text-white">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img className='w-full h-96' src={img} alt="car!" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className='my-12'>
                <h2 className='text-3xl font-bolder'>{name}</h2>
                <h2 className='text-2xl font-bolder'>Level: {level}</h2>
                <p><strong>Ratings: </strong> {ratings}</p>
                {details.length > 100 ?
                    <p>{details.slice(0, 100) + '...'}</p> :
                    <p>{details}</p>
                }
            </div>
           
                <Link className='mb-8' to={`/services/${_id}`}>
                    <button className="btn btn-primary mt-10">See details</button>
                </Link>
            
        </div>
       </div>


    );
};

export default ServiceCard;