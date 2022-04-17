import React from 'react';
import pop from '../../images/experts/pop.jpg';

const About = () => {
    return (
        <div className=''>
           <div className='services-service bg mt-5 w-75 position-relative top-50 mx-auto '>
            <img className='w-25' src={pop}  alt="" />
            <h2 className='mt-3'>Name:Srikanta datta</h2>           
            <p>My plan is to work hard everyday and get a better version
                 of my self as soon as possible and I worked really hard for this assignment.I used react,bootstap,react router and firebase in this project</p>
            <button  className='btn btn-primary btn-pop'>Inbox me</button>
        </div>
        </div>
    );
};

export default About;