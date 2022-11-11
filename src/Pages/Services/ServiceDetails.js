import React, { useContext, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ServiceReview from '../ServiceReview/ServiceReview';
import ClientReviews from '../SetReviews/ClientReviews';
import SetReviews from '../SetReviews/SetReviews';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { name, img, _id, details, ratings, price, level } = service
    console.log(service);
    useTitle('Service Details')

    return (
        <div>
            <div className="card card-compact my-8 mx-auto w-3/4 bg-base-100 shadow-xl  text-black">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img className='w-full h-96' src={img} alt="car!" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="text-3xl font-extrabold text-blue-900">{name}</h2>
                    <h4 className="text-2xl text-purple-500 font-bolder">Level: {level}</h4>
                    <h5 className="text-xl font-bold">Ratings: {ratings}</h5>
                    <h5 className="text-xl font-bold">Course Fees: {price}</h5>
                </div>
                <p className='my-2'>{details}</p>
            </div>
            <div>
           
                    <div>
                    <SetReviews></SetReviews>
                    </div>
                    <div>
                    <ServiceReview id={_id}></ServiceReview>

                    </div>
                 
            </div>

        </div>
    );
};

export default ServiceDetails;