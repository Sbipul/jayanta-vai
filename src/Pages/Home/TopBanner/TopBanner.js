import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    style={{ height: '80vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://i.ibb.co/WKyZrq3/19c4115f9b2a253368b1a6dc71372f33.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="text-warning">CATCH YOUR SUPER CAR</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '80vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://i.ibb.co/yVH6Gj1/6-67532-beautiful-car-wallpaper-hd.jpg "
                />

                <Carousel.Caption>
                    <h1 className="text-warning">WE WILL HELP YOU TO FIND BEST</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '80vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://i.ibb.co/K9fcrp1/b47072ed0669d0cbc79a3fa5d6e7924c.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className="text-warning">TIME AND TIDE WAIT FOR NONE</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;