import React, { useState, useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import { InputBox } from '../../components/InputBox';
import './register.scss';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <div style={{
            backgroundImage: 'url(https://i.stack.imgur.com/19yNw.png)',
            backgroundRepeat: 'repeat',
        }}>
            <div className='register-container'>
                <div className='register-form'>
                    <InputBox
                        text={name}
                        setText={(text: string) => {
                            setName(text);
                        }}
                        placeholder={'Your Name'}
                    />
                    <InputBox
                        text={phone}
                        setText={(text: string) => {
                            setPhone(text);
                        }}
                        placeholder={'Phone Number'}
                    />
                    <Button
                        primary={true}
                        disabled={false}
                        style={{ marginTop: '15px' }}
                        label={'Register'}
                    />
                </div>
                <div>
                    {'Already registered? '}
                    <a href='/login'>
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;