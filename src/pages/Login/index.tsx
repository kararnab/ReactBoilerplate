import React, { useState } from 'react';
import './login.scss';
import { Button } from '../../components/Button/Button';
import { InputBox } from '../../components/InputBox';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/slices/userSlice';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
        Android: { onLogin: (userName: string, password: string) => void };
    }
}

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const fromLocation = useLocation();

    console.log(fromLocation);


    const dispatch = useDispatch();

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
                        style={{ marginTop: '15px' }}
                        label={'Login'}
                        onClick={async () => {
                            //TODO: remove hardcode
                            console.log('onClick');
                            dispatch(signIn({
                                authKey: '1234214',
                                user: {
                                    id: '1',
                                    name: 'Arnab Kar'
                                }
                            }));
                            //dispatch(login(username, password));
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