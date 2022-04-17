import React from 'react';

import tra from '../../../images/experts/traveller.png';
import eifel from '../../../images/experts/eiffel-tower.png';
import guide from '../../../images/experts/travel-guide.png';
import travel from '../../../images/experts/travel.png';
import Graphic from '../../../images/experts/graphic-2.jpg';

import Ex1 from '../../../images/experts/11111111.jpg';

import "./Expert.css"

const Experts = () => {

    return (
        <div id='experts' className='container mt-5'>
            <section id="feature" className="my-4">

                <p className='topi'>Best deal</p>
                <h1 className='service'>Get the unlimited support by me</h1>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <div className="py-4">
                                <img className="w-100 mb-5 mt-4" src={Graphic} alt="" />
                                <img className="w-100 mt-4" src={Ex1} alt="" />

                            </div>
                        </div>


                        <div className="col-md-12 col-lg-7 ">
                            <div className="row">
                                <div className="col-md-6 mt-5 texti ">
                                    <div className="d-flex border my-2 p-3 flex-column align-items-center">
                                        <img className='w-100' src={travel} alt="" />
                                        <h3 className="text-center my-3">Female tourist guide</h3>
                                        <p className="text-center">Tour guides ensure that itineraries are met and that customers are being informed in an entertaining manner the location they are touring..</p>
                                    </div>
                                </div>



                                <div className="col-md-6 mt-5 texti ">
                                    <div className="d-flex border p-3 flex-column align-items-center">
                                        <img className='w-100' src={tra} alt="" />
                                        <h3 className="text-center my-3">Male tourist guide</h3>
                                        <p className="text-center">
                                            Tour guides ensure that itineraries are met and that customers are being informed in an entertaining manner the location they are touring..</p>
                                    </div>
                                </div>



                                <div className="col-md-6 my-3 mt-5 texti ">
                                    <div className="d-flex border p-3 flex-column align-items-center">
                                        <img className='w-100' src={eifel} alt="" />
                                        <h3 className="text-center my-3">Paris Tour</h3>
                                        <p className="text-center">Paris (nicknamed the "City of light") is the capital city of France, and the largest city in France..</p>
                                    </div>


                                </div>
                                <div className="col-md-6 my-3 mt-5 texti ">
                                    <div className="d-flex border p-3 flex-column align-items-center">
                                        <img className='w-100' src={guide} alt="" />
                                        <h3 className="text-center my-3">Unlimited Guideness</h3>
                                        <p className="text-center">The act or function of guiding; leadership; direction. · advice or counseling, .</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experts;