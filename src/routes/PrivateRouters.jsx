import React from 'react';
import UseAuth from '../hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouters = ({children}) => {
    const {user, isLoading} = UseAuth();
    const location = useLocation();

    if (isLoading){
        return <span className="loading loading-bars loading-lg"></span>;
    }

    if(user?.email) {
        return children;
        
    }
    return <Navigate state={location.pathname} to="/login" replace/>;
};

export default PrivateRouters;
