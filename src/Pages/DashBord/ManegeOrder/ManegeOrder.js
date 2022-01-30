import React, {useState,useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const ManegeOrder = () => {
    const [allOrders,setAllOrders] = useState([])

    useEffect(()=> {
        fetch('http://localhost:7000/order')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])

    const deleteBtn = id => {
        const confirm = window.confirm('Wanna delete this order of users? Sure?')
        if (confirm) {
            fetch(`http://localhost:7000/order/${id}`,{
            method:'DELETE'
        }).then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('Successfully removed item')
                const newOrders = allOrders.filter(order => order._id !== id)
                setAllOrders(newOrders)
            }
        })
        }
    }

    return (
        <Container>
            {
                allOrders.map(order => <div className="p-2" key={order?._id}>
                    <div className="d-flex align-items-center">
                        <div className="p-2">
                                <h5 className="m-0 p-0">{order?.productName.slice(0,10)}</h5>
                                <p className="m-0 p-0">{order?.name}</p>
                                <p className="m-0 p-0">{order?.email}</p>
                                <button className="ms-1" onClick={()=>deleteBtn(order?._id)}>Delete</button><br/>
                        </div>
                    </div>
                </div>)
            }
        </Container>
    );
};

export default ManegeOrder;