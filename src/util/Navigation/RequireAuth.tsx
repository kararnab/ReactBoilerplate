import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate, NavigateFunction } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { ILogin } from '../../redux/slices/userSlice';
import { ILocation } from '../../pages/Login';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const user: ILogin = useSelector((state: RootState) => state.user);
    const location = useLocation();

    if (!user.authKey) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    } else {
        return children;
    }
}

export function redirectAfterAuth(user: ILogin, fromLocation: ILocation, navigate: NavigateFunction) {
    if (user.authKey) {
        if (fromLocation.state && fromLocation.state.from) {
            navigate(fromLocation.state.from);
        } else {
            navigate('/');
        }

    }
}