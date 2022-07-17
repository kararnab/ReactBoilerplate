import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { ILogin } from '../../redux/slices/userSlice';

export function RequireAuth({ children }: { children: JSX.Element }) {
    //TODO: Implement authentication
    const user: ILogin = useSelector((state: RootState) => state.user);
    const location = useLocation();

    if (!user.authKey) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    } else {
        return children;
    }
}