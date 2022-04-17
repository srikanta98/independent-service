import React from 'react';
import { useNavigate } from 'react-router-dom';
import  './Service.css';

const Service = ({service}) => {
    // button tathe ami id ta pathathe chai sejonno (id dichi)
    const {name, img,description, price,id} = service;
    const navigate = useNavigate();
    const navigateToserviceDetail = id =>{
           navigate(`/service/${id}`);
    }
    return (
        <div className='services-service bg mt-5'>
            <img className='w-100' src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToserviceDetail(id)} className='btn btn-primary btn-pop'>{name}</button>
        </div>
    );
};

export default Service;