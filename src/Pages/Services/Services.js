import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        const url = 'http://localhost:5000/services'
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setServices(data)
            console.log(data);
        })
    },[]);

    return (
            <div className='w-11/12 mx-auto gap-y-20'>
            {
             services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)   
            }
            <div>
                <Link to='/services'> <button className='btn bg-blue-500 my-5'>See All</button> </Link>
            </div>
            </div>
        
    );
};

export default Services;