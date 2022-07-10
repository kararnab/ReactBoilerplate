import React, { useState } from 'react';
import './login.scss';
import { Button } from '../../components/Button/Button';
import { InputBox } from '../../components/InputBox';
import { login } from '../../services/auth.service';
import { LoggerUtil } from '../../util/LoggerUtil';

declare global {
    interface Window {
        Android: { onLogin: (userName: string, password: string) => void };
    }
}

const LoginPage = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <div className='login-container'>
                <div className='login-form'>
                    <InputBox
                        text={userName}
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
                            try {
                                const res = await login(userName, password);
                                if (window && window.Android && window.Android.onLogin) {
                                    //webView.addJavascriptInterface(AndroidJSInterface, "Android") is implemented by the device
                                    window.Android.onLogin(userName, password);
                                } else {
                                    LoggerUtil.logAnalyticsEvent({ msg: 'Javascript interface not present for this device' });
                                }
                                console.log(res);
                            } catch (e) {
                                console.log(e);
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