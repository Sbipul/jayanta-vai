import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Container } from 'react-bootstrap';
const Review = () => {
    const { register, handleSubmit} = useForm();
    const {user} = useAuth()

    const onSubmit = data => {
        if (data.count > 5) {
            alert('Please give a number under equal 5')
            return
        }
        data.img = user?.photoURL || 'https://res.cloudinary.com/teepublic/image/private/s--SC6WBeLv--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-201,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-312,y_-215/b_rgb:000000/c_limit,f_jpg,h_630,q_90,w_630/v1591166209/production/designs/10929272_0.jpg'
        fetch('http://localhost:7000/review',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Added your review')
            }
        })
      };
    return (
        <Container>
            <div className="w-100">
            <div className="w-75">
            <h1 className="text-center">Review<br /></h1>
                <form  onSubmit={handleSubmit(onSubmit)}>
                <input  type="text" placeholder="Name" {...register("name",{ required: true })} /><br/><br/>
                <input  type="number" placeholder="Rating" {...register("count")} /><br/><br/>
                <input  type="submit" /><br/>
                </form>
            </div>
        </div>
        </Container>
    );
};
//  mx-auto w-50"
export default Review;