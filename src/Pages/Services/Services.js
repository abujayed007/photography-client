
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from './ServiceCard';


const Services = () => {
const {services} = useLoaderData([])
    
useTitle('Services')
    return (
        <div className='w-11/12 mx-auto gap-y-20'>
           {
                 services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};
export default Services;