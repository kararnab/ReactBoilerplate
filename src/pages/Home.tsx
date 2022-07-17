import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../redux/slices/userSlice';
const Home = () => {
    const dispatch = useDispatch();
    return (
        <div>
            {'Welcome to Homepage'}
            <a
                href=''
                onClick={() => {
                    dispatch(signOut());
                }}>
                Logout
            </a>
        </div>
    );
};
export default Home;