import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
         fetch('sevices.json')
         .then(res => res.json())
         .then(data => setServices(data));
    }, [])

    return (
        <div id='services' className='container mb-5'>
            <p className="top mt-5">Category</p>
            <h1 className='service '>I Offer Best Services</h1>
            <div className="services">
            {
                services.map(service => <Service
                  key={service.id}
                  service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;