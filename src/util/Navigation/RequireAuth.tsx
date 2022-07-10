import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
//import { useAuth } from '../hooks/Auth';

export function RequireAuth({ children }: { children: JSX.Element }) {
    //TODO: Implement authentication
    //let { user } = useAuth();
    const user = false;
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    } else {
        return children;
    }
}