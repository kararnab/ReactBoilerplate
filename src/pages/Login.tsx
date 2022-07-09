import React, { useState } from 'react';
import { Button } from '../components/Button/Button';
import { SearchBar } from '../components/SearchBar';

const LoginPage = () => {
    const [userName, setUsername] = useState('');
    return (
        <div style={{ flex: 1, flexDirection: 'column' }}>
            LogIn Page
            <SearchBar
                onChange={function (txt: string): void {
                    setUsername(txt);
                }}
            />
            <Button
                label={'Login'}
                onClick={() => {
                    alert('Welcome ' + userName);
                }}
            />
            <div>
                Don't have a account?
                <a href="/register">
                    Register
                </a>
            </div>
        </div>
    );
};
export default LoginPage;