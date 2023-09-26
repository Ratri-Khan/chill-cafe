import React, { useContext } from 'react';
// import AuthProvider from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }
    return (
        <div>
            return <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;