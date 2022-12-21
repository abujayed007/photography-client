import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Loading from '../Loading/Loading';
import ServiceCard from './ServiceCard';


const Services = () => {
const {services} = useLoaderData([])
const {loading} = useContext(AuthContext)
useTitle('Services')

if(loading ){
   return <Loading></Loading>
}
    
    return (
        <div className='w-11/12 mx-auto gap-y-20'>
           {
                 services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};
export default Services;