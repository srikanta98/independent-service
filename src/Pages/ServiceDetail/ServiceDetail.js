import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    //url peramiter ta read korte hbe
    // App.js theke :serviceid diye korte hb
    //serviceid arek router e jabe
    
    return (
        <div>
            
            <div className='text-center'>
               <Link to="/checkout">
                <button className='btn btn-primary'>Proceed Checkout</button>
               </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;