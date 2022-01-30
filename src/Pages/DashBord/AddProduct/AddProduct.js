import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
        fetch('http://localhost:7000/products',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Added your Product')
            }
        })
    };
    return (
        <Container>
            <small className="text-light">#add_product</small>
            <div style={{height:'65vh'}} className="w-100">
            <div className="">
            <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
            <input className="w-100" type="text" placeholder="Product Name" {...register("productName")} /><br/><br/>
            <input className="w-100" type="text" placeholder="Product image" {...register("img")} /><br/><br/>
            <input className="w-100" type="text" placeholder="Price" {...register("price")} /><br/><br/>
            <input className="w-100" type="text" placeholder="Details" {...register("des")} /><br/><br/>
            <input className="w-100" type="text" placeholder="Rating" {...register("rating")} /><br/><br/>
            <input className="w-100" type="submit" /><br/>
            </form>
            </div>
        </div>
        </Container>
    );
};

export default AddProduct;