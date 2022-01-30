import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Reviews = () => {

    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        fetch('http://localhost:7000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="py-5">
            <Container>
                <h1 className="my-5 text-center">Review...</h1>
            {
                reviews.length ? <Row xs={1} md={5} className="g-4">
                {
                reviews.map(review => <Col className="review  p-3">
                <div className="d-flex align-items-center">
                    <div style={{height:'50px',width:'50px',overflow:'hidden'}} className="rounded-circle border-1">
                        <img className="w-100 h-100" src={review?.img} alt="" />
                    </div>
                    <div className="mx-3">
                        <p className=" p-0 m-0">{review?.name}</p>
                        <Rating name="half-rating-read" defaultValue={parseFloat(review?.count) || 5} precision={0.5} readOnly />
                    </div>
                </div>
            </Col>)
                }
                </Row> : <h3>loading...</h3>
            }
            </Container>
        </div>
    );
};

export default Reviews;

