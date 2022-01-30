
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:7000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="py-5">
            <Container>
                <div className="w-100 mx-auto">
                <h3 className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint maiores, autem facere expedita quaerat eos.</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rem id doloremque quos doloribus cum exercitationem odio, voluptatibus sit consectetur ut maiores nemo ipsum iure.</p>
                </div>
                {
                    products.length ? <Row xs={1} md={3} className="g-4">
                    {
                        products.slice(0,6).map(product => <Col key={product?._id}>
                            <Card>
                                <Card.Img style={{height:'250px'}} variant="top" src={product?.img}/>
                                <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Card.Title>{product?.productName}</Card.Title>
                                </div>
                                <p className="p-0 m-0">{product?.des}</p>
                                <div>
                                    <h2>$ 50</h2>
                                    <Link to={`/purchase/${product._id}`}><Button >Order now</Button></Link>
                                </div>
                                </div>
                            </Card>
                            </Col>)
                    }
                </Row> : <h2>Loading...</h2>
                }
            </Container>
        </div>
    );
};

export default Products;