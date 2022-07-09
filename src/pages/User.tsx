import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const params = useParams();
    let user;
    try {
        user = params.userName;
    } catch (e) {
        user = '';
    }

    return (
        <div>
            Welcome {user}
        </div>
    );
};

export default User;