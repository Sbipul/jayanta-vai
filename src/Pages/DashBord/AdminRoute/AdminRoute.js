import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({children,...rest}) => {
    const {user,admin ,adminLoading} = useAuth()
    if (adminLoading) {
        return <h2>Please Wait</h2>
    }
    return (
        <Route 
            {...rest} 
            render = {({location})=> user.email && admin ? 
            children : 
            <Redirect 
                to={{
                    pathname:'/',
                    state:{from:location}
                    }}
            ></Redirect>}>

        </Route>
    );
};

export default AdminRoute;