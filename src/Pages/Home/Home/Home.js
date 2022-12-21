import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import AboutMe from '../../AboutMe/AboutMe';
import Loading from '../../Loading/Loading';
import ServiceCard from '../../Services/ServiceCard';
import Banner from '../Banner/Banner';

const Home = () => {
const {loading}=useContext(AuthContext)
    const [services, setServices] = useState([])
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);

    useTitle(`${"Jayed's Photography"}`)
    useEffect(() => {
        const url = `https://photography-server-phi.vercel.app/services?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data.services)
                setCount(data.count)
            })
    }, [page, size]);

    if(loading){
     return   <Loading></Loading>
    }

    const pages = Math.ceil(count / size);
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
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