import React from 'react';
import { Button, Container } from 'react-bootstrap';

const BackGround = () => {
    return (
        <div className="w-100">
            <Container>
                <div className="d-flex align-items-center justify-content-center" style={{height:'60vh',width:'100%'}}>
                    <div className="w-100">
                        <div className="row align-items-center">
                        <h1 >Car Store</h1>
                            <div className="col-12 col-md-6 text-end">
                                <h1 className='fs-bold'>Our Goal and mission in 2022</h1>
                                <p>A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods. the 20th century, and developed economies depend on them. The year 1886 is regarded as the birth year of the car when German inventor Karl Benz patented his Benz Patent-Motorwagen. Cars became widely available in the early 20th century. One of the first cars accessible to the masses was the 1908 Model T, an American car manufactured by the Ford Motor Company. Cars were rapidly adopted in the US, where they replaced animal-drawn carriages and carts. In Europe and other parts of the world, demand for automobiles did not increase until after Wor</p>
                            </div>

                        
                            <div className="col-12 col-md-6 text-start">
                                <img src="https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXV0b21vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BackGround;