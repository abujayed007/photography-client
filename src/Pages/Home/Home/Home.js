import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {

    const [services, setServices] = useState([])
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);


    useEffect(() => {
        const url = `https://photography-server-phi.vercel.app/services?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data.services)
                setCount(data.count)
            })
    }, [page, size]);

    const pages = Math.ceil(count / size);
    return (
        <div>
            <Banner></Banner>
            <div>
            {
                 services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            <div >
                <Link to='/services'><button className='btn bg-blue-500 my-10'>See All</button></Link>
            </div>
            </div>
        </div>
    );
};

export default Home;