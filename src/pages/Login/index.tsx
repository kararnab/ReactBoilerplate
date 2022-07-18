import React, { useState, useEffect } from 'react';
import './login.scss';
import { Button } from '../../components/Button/Button';
import { InputBox } from '../../components/InputBox';
import { useDispatch, useSelector } from 'react-redux';
import { ILogin, signIn } from '../../redux/slices/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { redirectAfterAuth } from '../../util/Navigation/RequireAuth';
import { performLogin } from '../../redux/thunk/userThunk';
import { unwrapResult } from '@reduxjs/toolkit';

declare global {
    interface Window {
        Android: { onLogin: (userName: string, password: string) => void };
    }
}

export interface ILocation {
    state: any | unknown
}

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState({ isVisible: false, title: '' });
    const user: ILogin = useSelector((state: RootState) => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fromLocation: ILocation = useLocation();

    useEffect(() => {
        redirectAfterAuth(user, fromLocation, navigate);
    }, [user]);

    return (
        <div>
            <div className='login-container'>
                <div className='login-form'>
                    <InputBox
                        text={username}
                        setText={(text: string) => {
                            setUsername(text);
                        }}
                        placeholder={'UserName'}
                    />
                    <InputBox
                        text={password}
                        setText={(text: string) => {
                            setPassword(text);
                        }}
                        placeholder={'Password'}
                        type='password'
                    />
                    <Button
                        primary={true}
                        disabled={user.status.isLoading}
                        style={{ marginTop: '15px' }}
                        label={'Login'}
                        onClick={async () => {
                            try {
                                const resultAction = await dispatch<any>(performLogin({ userId: username, password: password }));
                                //const originalPromiseResult = unwrapResult(resultAction);
                                // handle result here
                            } catch (rejectedValueOrSerializedError) {
                                // handle error here
                            }
                        }}
                    />
                </div>
                <div>
                    Don't have a account?
                    <a href='/register'>
                        Register
                    </a>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
