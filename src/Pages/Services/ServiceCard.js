import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    const { name, img, _id, details, ratings, price, level } = service;
    return (

        <div className="card my-10 w-full lg:card-side bg-base-100 shadow-xl">
            <img className=' lg:w-72 w-full h-52 rounded' src={img} alt="" />
            <div className="mx-10">
                <h2 className="card-title text-2xl font-bolder">{name}</h2>
                {
                    details.length > 100 ?
                    <p>{details.slice(0, 100) + '...'} </p> :
                    <p>{details}</p>
                }
                
                <p className='text-md font-bold'>Course Fees: {price}</p> 
                <p className='text-md font-bold'>Ratings: {ratings}</p>
                
                <div className="card-actions justify-center my-8">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>


    );
};

export default ServiceCard;