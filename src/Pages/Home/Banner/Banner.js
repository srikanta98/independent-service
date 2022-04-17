import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import p1 from '../../../images/banner/p1.jpg'
import p2 from '../../../images/banner/p2.jpg'
import p3 from '../../../images/banner/p3.jpg'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className='position'>
                    <img
                        className="d-block w-100"
                        src={p1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Machu Picchu, Peru.</h3>
                        <p>Travelers are always looking for inspiration to guide their adventures..Coming up with a list of places to visit can be challenging when you're staring at a globe. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src={p2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Pyramids of Giza, Egypt</h3>
                        <p>Some destinations just stand out above the rest. Many are the type of places where you can take a photo, and it requires no explanation to identify the location:</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Nepal Himalayas, east-central section </h3>
                        <p>
                        For many of these attractions, it's what they symbolize and the destinations they represent that make them so significant. In other cases, it is the site itself that makes it worth visiting the country.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            );
        </div>
    );
};

export default Banner;