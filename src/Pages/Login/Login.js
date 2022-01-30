import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
const Login = () => {
    const { register, handleSubmit} = useForm();
    const {handleUserLogin,setError,error} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'


    const onSubmit = data => {
      handleUserLogin(data.email,data.password)
      .then((result) => {
        history.push(redirect_url)
    })
    .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
        alert(errorMessage)
    });
    };

    const {handleGoogle} = useAuth()

    const handleGoogleLog = () => {
      handleGoogle()
      .then(result => {
        history.push(redirect_url)
    })
    }

  return (
    <Container style={{height:'100vh'}} className="bg-1 d-flex align-items-center justify-content-center">
        <div style={{width:'100%'}}>
        <div className="row align-items-center">
          <div className="col-12 col-md-12 p-3">
              <form className="w-25 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <input className="w-100" type="text" placeholder="Your Email" {...register("email")} /><br/><br/>
            <input className="w-100" type="password" placeholder="Your Password" {...register("password")} /><br/><br/>
            <input className="w-100 bg-success border-0 p-2" type="submit" value="Login"/><br/>
            </form>
            
            <div className="w-75 mx-auto text-center pt-3">
            <small className="text-light">{error}</small><br />
            <Button className="text-center mx-1" onClick={handleGoogleLog}>Google log in</Button>
            <Link to="/regi" className="mx-1">new user</Link>
            <Link to="/home" className="mx-1">Back to Home</Link>
            </div>
          </div>
        </div>
        </div>
    </Container>
  );
};

export default Login;