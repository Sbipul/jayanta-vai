import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const ManageProduct = () => {
    const [allProducts,setAllProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:7000/products')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    },[])

    const deleteBtn = id => {
        const confirm = window.confirm('Remove this Product?')
        if (confirm) {
            fetch(`http://localhost:7000/products/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('Successfully removed item')
                const newProducts = allProducts.filter(order => order._id !== id)
                setAllProducts(newProducts)
            }
        })
        }
    }
    return (
        <Container>
            <small className="text-light">#manage_products</small>
            {
                allProducts.map(product => <div className=" p-2" key={product?._id}>
                    <div>
                        <div style={{height:'87px',width:'90px',overflow:'hidden'}} className=" bproduct-1">
                            <img className="w-100 h-100" src={product?.img} alt="" />
                        </div>
                        <div className="p-2">
                                <h5 className="m-0 pb-3">{product?.productName}</h5>
                                <button className="ms-2" onClick={()=>deleteBtn(product?._id)}>Remove</button><br/>
                        </div>
                    </div>
                </div>)
            }
        </Container>
    );
};

export default ManageProduct;